import React from 'react';

import '../styles/yogaListItem.scss';

const YogaListItem = ({ className, price, maxCapacity, details, duration}) => {
  return (
    <li className={`Yoga-list-item ${className}`}>
      <h3>{className}</h3>
      <p>Price: ${price}</p>
      <p>Max Capacity: {maxCapacity}</p>
      <p>Details: {details}</p>
      <p>Duration: {duration} minutes</p>
    </li>
  );
};


export default YogaListItem;