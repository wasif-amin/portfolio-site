import React, { useState, useEffect } from "react";
import "../styles.css";
import Project from "./Project";
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
    <div className="App">
      {projects.map((project, index) => (
        <Project
          key={index}
          name={Project.name}
          img={Project.image_url}
          description={project.description}
          gitHub={project.github_link}
          loom={project.loom_link}
        />
      ))}
    </div>
  );
}
