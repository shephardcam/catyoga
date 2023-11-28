import React from 'react';
import YogaListItem from './YogaListItem';

const YogaList = ({ yogaClasses }) => {
  return (
    <div>
      <h2>Yoga Classes</h2>
      <ul className='Yoga-list'>
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
    </div>
  );
};

export default YogaList;
