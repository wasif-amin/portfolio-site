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
      <input type="text" placeholder="new project" />
      <input type="text" placeholder="detail" />
      <input type="text" placeholder="detail" />
    </form>
  );
}

export default CreateProject;
