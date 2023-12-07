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
    // Call a function to update user information in the parent component
    onEdit(editedUser);
    setIsEditing(false);
  };

  return (
    <div className="card user-card">
      {isEditing ? (
        <form>
          <p>
            <label>Fullname:<input type="text" name="fullname" value={editedUser.fullname} onChange={handleInputChange} /></label>
          </p>
          <p>
            <label>Email:<input type="text" name="email" value={editedUser.email} onChange={handleInputChange} /></label>
          </p>
          <p>
            <label>Password:<input type="password" name="password" value={editedUser.password} onChange={handleInputChange} /></label>
          </p>
          
          <button type="button" onClick={handleSaveClick}>
            Save
          </button>

          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>

        </form>
      ) : (
        <>
          <p>
            Full Name: {user.fullname}
          </p>
          <p>
            Email: {user.email}
          </p>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
  );
};

export default ProfileInformationCard;
