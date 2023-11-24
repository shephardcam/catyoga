import React from 'react';
import YogaListItem from './YogaListItem'; // Adjust the import path based on your project structure

const YogaList = ({ yogaClasses }) => {
  return (
    <ul className='Yoga-list'>
      {yogaClasses.map((yogaClass) => (
        <YogaListItem key={yogaClass.id} {...yogaClass} />
      ))}
    </ul>
  );
};

export default YogaList;
