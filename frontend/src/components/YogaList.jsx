import React from 'react';
import YogaListItem from './YogaListItem';
import '../styles/yogaList.scss';


const YogaList = ({ yogaClasses, user }) => {
  return (
    <div>
      <h2 class_name ="titel-yoga">Yoga Classes </h2>
      <ul >
        {yogaClasses.map((yogaClassData) => (
          <YogaListItem
            id={yogaClassData.id}
            className={yogaClassData.class_name}
            price={yogaClassData.price}
            maxCapacity={yogaClassData.max_capacity}
            details={yogaClassData.details}
            duration={yogaClassData.duration}
            classInfoId={yogaClassData.classInfoId}
            classDay={yogaClassData.class_day}
            startTime={yogaClassData.start_time}
            isMaxCapacity={yogaClassData.is_max_capacity}
            user={user}
          />
        ))}
      </ul>
      <p></p>
    </div>
  );
};

export default YogaList;
