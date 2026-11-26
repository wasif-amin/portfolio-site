import React from "react";
import "../styles.css";

function Login() {
  return (
    <div className="Project">
      <h1>enter password to login, Wasif</h1>
      <form>
        <input type="password" placeholder="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Login;
