import React from 'react';
import Login from '../components/Login';
import Registration from '../components/Registration';

const LoginPage = ({ handleLogin, handleRegistration }) => {

  return (
    <div>
      <Login onLogin={handleLogin} />
      <Registration onRegistration={handleRegistration} />
    </div>
  );
};

export default LoginPage