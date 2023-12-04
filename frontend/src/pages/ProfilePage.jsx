import React from 'react';


const ProfilePage = ({ onLogout }) => {
  return (
    <div >
      <h1> Welcome to Profile page</h1>
      <div className="nav-item"><button onClick={onLogout}>Logout</button></div>
    </div>
  );
};

export default ProfilePage;
