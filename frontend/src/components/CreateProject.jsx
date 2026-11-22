import { useState } from "react";

function CreateProject(props) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    img_url: "",
  });
  return (
    <form className="newProject">
      <h2>New project</h2>
      <input name="title" type="text" placeholder="name " />
      <input type="image_url" placeholder="image url" />
      <textarea
        cols="30"
        name="description"
        id="description"
        placeholder="enter description"
        rows="4"
      ></textarea>
      <input name="github_link" type="text" placeholder="github" />
      <input name="loom_link" type="text"placeholder="loom link" />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default CreateProject;
