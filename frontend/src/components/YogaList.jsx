import React from 'react';
import YogaListItem from './YogaListItem'; // Adjust the import path based on your project structure

const YogaList = ({ yogaClasses }) => {
  return (
    <div>
      <h1>Yoga Class List</h1>
      {yogaClasses.map((yogaClass, index) => (
        <YogaListItem key={index} {...yogaClass} />
      ))}
    </div>
  );
};

export default YogaList;