import React from 'react';
import YogaListItem from './YogaListItem';
import '../styles/yogaList.scss';

const YogaList = ({ yogaClasses }) => {
  return (
    <div>
      <h2 class_name ="titel-yoga">Yoga Classes </h2>
      <ul >
        {yogaClasses.map((yogaClassData) => (
          <YogaListItem
            key={yogaClassData.id}
            className={yogaClassData.class_name}
            price={yogaClassData.price}
            isMaxCapacity={yogaClassData.maxCapacity}
            details={yogaClassData.details}
            duration={yogaClassData.duration}
          />
        ))}
      </ul>
      <p></p>
    </div>
  );
};

export default YogaList;
