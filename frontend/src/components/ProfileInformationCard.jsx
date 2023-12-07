import React, { useState } from 'react';

const ProfileInformationCard = ({ user, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ fullname: user.fullname, email: user.email, password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedUser({ fullname: user.fullname, email: user.email, password: '' });
  };

  const handleSaveClick = () => {
    try {
      // Call a function to update user information in the parent component
      onEdit(editedUser);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user information:', error);
      // Handle the error as needed
    }
  };

  return (
    <div className="card user-card">
      {isEditing ? (
        <form>
          <p>
            <label>Full Name:<input type="text" name="fullname" value={editedUser.fullname} onChange={handleInputChange} /></label>
          </p>
          <p>
            <label>Email:<input type="text" name="email" value={editedUser.email} onChange={handleInputChange} /></label>
          </p>
          <p>
            <label>Password:<input type="password" name="password" value={editedUser.password} onChange={handleInputChange} /></label>
          </p>
          
          <div className="button">
            <button type="button" onClick={handleSaveClick}>Save</button>
          </div>
          <div className="button">
            <button type="button" onClick={handleCancelClick}>Cancel</button>  
          </div>

        </form>
      ) : (
        <>
          <p>Full Name: {user.fullname}</p>
          <p>Email: {user.email}</p>
          <div className="button">
            <button onClick={handleEditClick}>Edit</button>
          </div>
          
        </>
      )}
    </div>
  );
};

export default ProfileInformationCard;
