const express = require("express");
const cors = require("cors");
const { Pool, Pool } = require("pg");
require("dotenv").config();

const Pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Portfolio",
  password: "21070212w",
  port: 5432,
});

const app = express();
const PORT = process.env.PORT || 50001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
