import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = ({ onLogout }) => {
  return (
    <div >
      <h1> Welcome to Profile page</h1>
      <div className="nav-item"><button onClick={onLogout}>  
       <Link to="/">
      Logout
      </Link></button></div>
    </div>
  );
};

export default ProfilePage;
