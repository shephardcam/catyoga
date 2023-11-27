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
            classDay={yogaClassData.class_day}
            startTime={yogaClassData.start_time}
            isMaxCapacity={yogaClassData.is_max_capacity}
          />
        ))}
      </ul>
    </div>
  );
};

export default YogaList;