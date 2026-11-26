import React, { useState, useEffect } from "react";
import "../styles.css";
import Project from "./Project";
import CreateProject from "./CreateProject";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/api/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);
  console.log(projects);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CreateProject />
                {projects.map((project, index) => (
                  <Project
                    key={index}
                    name={project.title}
                    img={project.image_url}
                    description={project.description}
                    github={project.github_link}
                    loom={project.loom_link}
                  />
                ))}
              </>
            }
          />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
