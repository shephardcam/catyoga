import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/login.scss";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", { email, password });
      const { user } = response.data;

      // Set cookie with user info
      document.cookie = `user=${JSON.stringify(user)}; path=/`;

      onLogin(user);

      // Redirect to homepage
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="main">
    <div className="container">
      <h2>Login</h2>
      <form>

        <label className="input-box">
          <h6>Email:</h6>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i class="fa-solid fa-user"></i>
        </label>

        <br />

        <label className="input-box">
          <h6>Password:</h6>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i class="fa-solid fa-lock"></i>
        </label>

        <br />

        <button className="btn-btn" type="button" onClick={handleLogin}>
          Login
        </button>

        <div className="register-link" >
          Don't have an account, Register!
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
