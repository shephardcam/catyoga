import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = ({ onLogout, user, yogaClasses, yogaClassInfo }) => {

  //Get registered_classes
  const [allRegisteredClassIds, setAllRegisteredClassIds] = useState([]);

  useEffect(() => {
    fetch('./api/registered-classes')
    .then((response) => response.json())
    .then((data) => {
      setAllRegisteredClassIds(data);
    })
    .catch((error) => {
    console.error("Error fetching registered classes data:", error);
    })
  }, []);

  console.log('allRegisteredClassIds', allRegisteredClassIds)
  
  // Select only classIDs that match user.id
  const userRegisteredClassIds = allRegisteredClassIds.filter((userClassId) => userClassId.user_id === user.id);
  console.log('userRegisteredClasses', userRegisteredClassIds)

  // Select IDs from yoga_classes
  const userRegisteredClasses = userRegisteredClassIds.map((userClass) => userClass.yoga_class_id);
  // Select only classes with userID matching user.id
  const userYogaClasses = yogaClasses.filter((yogaClass) => userRegisteredClasses.includes(yogaClass.id));
  console.log('userRegisteredClassesInYoga', userYogaClasses);

  // Render user's registered classes
  const renderUserClasses = () => {
    if (userYogaClasses.length === 0) {
      return <p>No registered classes.</p>;
    }

    return (
      <ul>
        {userYogaClasses.map((classItem) => (
          <li key={classItem.id}>
            Day: {classItem.class_day}, 
            Class: {yogaClassInfo[classItem.yoga_class_info_id-1].class_name},
            Details: {yogaClassInfo[classItem.yoga_class_info_id-1].details},
            Time: {classItem.start_time},
            Duration: {yogaClassInfo[classItem.yoga_class_info_id-1].duration},
            Price: ${yogaClassInfo[classItem.yoga_class_info_id-1].price}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div >
      <h1> Welcome to Profile page</h1>
      <div className="nav-item"><button onClick={onLogout}>  
       <Link to="/">
      Logout
      </Link></button>
      </div>
      {/* Render the user's registered classes */}
      {renderUserClasses()}
    </div>
  );
};

export default ProfilePage;
