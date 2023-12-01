import React from 'react';
import '../styles/yogaListItem.scss';
import BookingButton from './BookingButton';
import { useYogaContext } from './YogaContext';
import { Link } from 'react-router-dom';

const YogaListItem = ({ className, price, details, duration, classDay, startTime, isMaxCapacity, maxCapacity }) => {
  const { setYogaData } = useYogaContext();

  
  return (
    <div className="YogaListItem">
      <h2>{classDay}{startTime} {isMaxCapacity}</h2>
      <h3>Yoga Class</h3>
      <p>name: {className}</p>
      <p>price: {price}</p>
      <p>Is Max Capacity: {maxCapacity}</p>
      <p>details: {details}</p>
      <p>duration: {duration}</p>
      {isMaxCapacity ? (
        <p>Class Full!</p>
      ) : (
        <button onClick={handlePurchaseClick}>
          <Link to="/waiver">
            Purchase
          </Link>
        </button>
      )}
    </div>
  );
};

export default YogaListItem;
