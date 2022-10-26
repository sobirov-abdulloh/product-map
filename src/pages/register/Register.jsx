import React from "react";
import "./Register.css";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="reg">
      <form action="" onSubmit={handleSubmit}>
        <h1 style={{ color: "white" }}>Registor</h1>
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="parol" />
        <button type="submit">register</button>
      </form>
    </div>
  );
}

export default Register;