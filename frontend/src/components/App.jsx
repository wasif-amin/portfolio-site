import React, { useState, useEffect } from "react";
import "../styles.css";
import Project from "./Project";
export default function App() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5001/api/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);
  console.log(projects);
  return (
    <div className="App">
      {projects.map((Project, index) => (
                <Product
                  key={index}
                  name={Project.name}
                  price={Project.price}
                  img={Project.image_url}
                  isAdmin={isAdmin}
            
                />
              ))}
    </div>
  );
}
