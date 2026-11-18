import React from "react";
import "../styles.css";
function Project(props) {
  return (
    <div className="Project">
      <h1>{props.name}</h1>
      <img src={props.img} alt="" height="200px" width="200" />
      <p>{props.description}</p>
      <div className="button-container">
        <a href={props.gitHub} target="_blank">
          <button>GitHub</button>
        </a>
        <a href={props.loom} target="_blank">
        
          <button>Video demo</button>
        </a>
      </div>
    </div>
  );
}

export default Project;
