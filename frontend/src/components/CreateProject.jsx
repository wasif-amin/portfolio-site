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
      <input type="text" placeholder="name " />
      <input type="text" placeholder="image url" />
      <textarea
        cols="30"
        name="description"
        id="description"
        placeholder="enter description"
        rows="4"
      ></textarea>
      <input type="text" placeholder="github" />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default CreateProject;
