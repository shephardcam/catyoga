import React, { useState } from 'react';

const Registration = ({ onRegistration }) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    const userData = { fullname, email, password };
    onRegistration(userData);
  };

  return (
    <div>
      <h2>Registration</h2>
      <form>
        <label>
          Fullname:
          <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleRegistration}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
