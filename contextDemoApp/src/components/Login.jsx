import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const { user, setUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();

    if (user.username === "raju123" && user.password === "0440") {
      alert("Login SuccessFull !!");
    } else {
      alert("Invalid username or password! Please Try Again 😀");
    }
  };

  const handleChangeFormInput = (field, value) => {
    setUser((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div>
      <h1>LogIn</h1>
      <input
        type="text"
        value={user.username}
        placeholder="username"
        onChange={(e) => handleChangeFormInput("username", e.target.value)}
      />{" "}
      <input
        type="password"
        value={user.password}
        placeholder="password"
        onChange={(e) => handleChangeFormInput("password", e.target.value)}
      />
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
