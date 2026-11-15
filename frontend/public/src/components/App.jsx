import React, { useState, useEffect } from "react";
import "./styles.css";
import Project from "../Project";
export default function App() {
  const [projects, setProjects] = useState(null);

  return (
    <div className="App">
      <Project />
    </div>
  );
}
