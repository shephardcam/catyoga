import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileInformationCard from '../components/ProfileInformationCard';
import RegisteredClassesList from '../components/RegisteredClassesList';
import '../styles/ProfilePage.scss';

const ProfilePage = ({ onLogout, user, yogaClasses, yogaClassInfo }) => {
  const [allRegisteredClassIds, setAllRegisteredClassIds] = useState([]);
  const [userState, setUserState] = useState(user);

  useEffect(() => {
    // Update userState when the user prop changes
    setUserState(user);
  }, [user]);
  
  useEffect(() => {
    fetch('./api/registered-classes')
      .then((response) => response.json())
      .then((data) => {
        setAllRegisteredClassIds(data);
      })
      .catch((error) => {
        console.error('Error fetching registered classes data:', error);
      });
  }, []);

  const userRegisteredClassIds = allRegisteredClassIds.filter((userClassId) => userClassId.user_id === user.id);
  const userRegisteredClasses = userRegisteredClassIds.map((userClass) => userClass.yoga_class_id);
  const userYogaClasses = yogaClasses.filter((yogaClass) => userRegisteredClasses.includes(yogaClass.id));


  const handleEditUser = async (editedUser) => {
    try {
      // Update user information on the server
      await fetch(`./api/users/${userState.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedUser),
      });

      // Fetch the updated user information from the server
      const response = await fetch(`./api/users/${userState.id}`);
      const updatedUserData = await response.json();

      console.log('Updated user data from the server:', updatedUserData);

      // Update the user state in component assuming success
      setUserState((prevUserState) => ({ ...prevUserState, ...updatedUserData }));
    // Update the user cookie
      document.cookie = `user=${JSON.stringify(updatedUserData)}; path=/`;
    } catch (error) {
      console.error('Error updating user information:', error);
    }
  };

  return (
    <div className="container">
      <h1>Hello {userState.fullname}!</h1>

      {/* Render information card */}
      <h3>Your Information:</h3>
      <ProfileInformationCard user={userState} onEdit={handleEditUser} />

      {/* Render registered classes card */}
      <h3>Your Upcoming Classes:</h3>
      <div className="card classes-card">
        {/* Render registered classes */}
        <RegisteredClassesList userYogaClasses={userYogaClasses} yogaClassInfo={yogaClassInfo} />
      </div>

      <div className="nav-item">
        <button onClick={onLogout}>
          <Link to="/">Logout</Link>
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
