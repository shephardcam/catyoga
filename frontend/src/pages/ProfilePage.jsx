import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useYogaContext } from '../components/YogaContext';
import '../styles/ProfilePage.scss'

const ProfilePage = ({ onLogout }) => {
  const { state } = useYogaContext();
  console.log('Context State:', state);
  const { className, details, startTime, classDay, user } = state;

  return (
    <body>
      <div className="container">
        <h1>Welcome</h1>
        <div className="nav-item">
          <button onClick={onLogout}>
            <Link to="/">Logout</Link>
          </button>
        </div>
      </div>
      <div className="next-class">
        Your next class is {className} {details}
        <p>on {classDay} at {startTime}</p>
      </div>
    </body>
  );
};

export default ProfilePage;
