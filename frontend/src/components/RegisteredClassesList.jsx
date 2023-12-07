import React from 'react';

const RegisteredClassesList = ({ userYogaClasses, yogaClassInfo }) => {
  if (userYogaClasses.length === 0) {
    return <p>No registered classes.</p>;
  }

  return (
    <div>
      {userYogaClasses.map((classItem) => (
        <div key={classItem.id} className="class-card">
          <h4>{yogaClassInfo[classItem.yoga_class_info_id - 1].class_name} | {classItem.class_day} @{classItem.start_time}</h4>
          <p>
            
            <p>
              Summary: {yogaClassInfo[classItem.yoga_class_info_id - 1].details}
              {/* Price: ${yogaClassInfo[classItem.yoga_class_info_id - 1].price} */}
            </p>

            <p>
              Class Length: {yogaClassInfo[classItem.yoga_class_info_id - 1].duration}
            </p>
            
          </p>
        </div>
      ))}
    </div>
  );
};

export default RegisteredClassesList;
