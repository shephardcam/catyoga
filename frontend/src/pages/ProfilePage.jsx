import React from 'react';
import { Link } from 'react-router-dom';
import { useYogaContext } from '../components/YogaContext';


const ProfilePage = ({ onLogout }) => {
  const { state } = useYogaContext();
  console.log('Context State:', state);
  const { className, details, id, startTime } = state;
  return (
    <body>
    <div >
      <h1> Welcome to Profile page</h1>
      <div className="nav-item"><button onClick={onLogout}>  
       <Link to="/">
      Logout
      </Link></button></div>
    </div>
    <div>Your next class is {className} {startTime}</div>
    <p>{details}</p>
    <p></p>
    </body>
  );
};

export default ProfilePage;
