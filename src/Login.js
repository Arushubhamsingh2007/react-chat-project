import React, { useState } from "react";

function Login({ setUser }) {
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (name !== "") {
      setUser(name);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login to Chat</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Enter Chat</button>
    </div>
  );
}

export default Login;