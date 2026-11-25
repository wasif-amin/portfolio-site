const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();
const bcrypt = require("bcrypt");
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

app.get("/api/projects", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM projects");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error fetching projects" });
  }
});
app.post("/api/add-project", async (req, res) => {
  try {
    const { title, image_url, description, github_link, loom_link } = req.body;

    const newProject = await pool.query(
      "INSERT INTO projects (title, image_url, description, github_link, loom_link) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [title, image_url, description, github_link, loom_link]
    );

    res.status(201).json(newProject.rows[0]);
  } catch (err) {
    console.error("Error adding project:", err.message);
    res.status(500).json({ error: "Server error while adding project" });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
