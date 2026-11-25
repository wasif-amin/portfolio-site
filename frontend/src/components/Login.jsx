import React from "react";
import "../styles.css";

function Login {
return (
  <div className="Product">
    <h1>enter password to login, Wasif</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
    
  </div>
);
}