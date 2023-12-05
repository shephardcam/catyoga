import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = ({ onRegistration }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegistration = () => {
    const userData = { fullname, email, password };
    onRegistration(userData);

    // Redirect to homepage
    navigate("/");
  };

  return (
    <div className="main">
      <div className="container">
          <h2>Registration</h2>
      <form>

      <label className="input-box">
          <h6>Fullname:</h6>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </label>

        <br />

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

        <button className="btn-btn" type="button" onClick={handleRegistration}>
          Register
        </button>

        <div className="register-link" >
           Already have an account, Login!
        </div>
      </form>
      </div>
    </div>
  );
};

export default Registration;
