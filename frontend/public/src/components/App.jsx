import React, { useState, useEffect } from "react";
import "./styles.css";
import Project from "../Project";
export default function App() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}http://localhost:5001/api/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);
  return (
    <div className="App">
      <Project />
    </div>
  );
}
