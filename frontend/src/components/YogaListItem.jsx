import React from 'react';
import { Link } from 'react-router-dom';
import { useYogaContext } from './YogaContext';

const YogaListItem = ({ className, price, details, duration, classDay, startTime, isMaxCapacity, maxCapacity }) => {
  const { setYogaData } = useYogaContext();

  const handlePurchaseClick = () => {
    setYogaData({ className, price, details });
  };

  return (
    <div className="YogaListItem">
      <h2>{classDay}{startTime} {isMaxCapacity}</h2>
      <h3>Yoga Class</h3>
      <p>name: {className}</p>
      <p>price: {price}</p>
      <p>Is Max Capacity: {maxCapacity}</p>
      <p>details: {details}</p>
      <p>duration: {duration}</p>
      <button onClick={handlePurchaseClick}>
      <Link to="/waiver">
        Purchase
      </Link>
      </button>
    </div>
  );
};

export default YogaListItem;
