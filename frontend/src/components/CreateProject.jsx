import { useState } from "react";

function CreateProject(props) {
  const [newProject, setNewProject] = useState({
    title: "",
    image_url: "",
    description: "",
    github_link: "",
    loom_link: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNewProject((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function handleAddProject(event) {
    event.preventDefault();

    fetch("http://localhost:5001/api/add-project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProject),
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add project");
        return res.json();
      })
      .then((data) => {
        console.log("Success:", data);
        setNewProject({
          title: "",
          image_url: "",
          description: "",
          github_link: "",
          loom_link: "",
        });
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }
  return (
    <form onSubmit={handleAddProject} className="newProject">
      <h2>New project</h2>
      <input
        name="title"
        value={newProject.title}
        onChange={handleChange}
        type="text"
        placeholder="title"
      />
      <input
        type="image_url"
        name="image_url"
        value={newProject.image_url}
        onChange={handleChange}
        placeholder="image url"
      />
      <textarea
        cols="30"
        name="description"
        value={newProject.description}
        onChange={handleChange}
        id="description"
        placeholder="enter description"
        rows="4"
      ></textarea>
      <input
        name="github_link"
        value={newProject.github_link}
        onChange={handleChange}
        type="text"
        placeholder="github"
      />
      <input
        name="loom_link"
        value={newProject.loom_link}
        onChange={handleChange}
        type="text"
        placeholder="loom link"
      />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default CreateProject;
