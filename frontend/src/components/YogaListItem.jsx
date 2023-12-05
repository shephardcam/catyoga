import React from 'react';
import '../styles/yogaListItem.scss';
import { useYogaContext } from './YogaContext';
import { Link } from 'react-router-dom';

const YogaListItem = ({ className, price, details, duration, classDay, startTime, isMaxCapacity, maxCapacity, user, id, yogaClass }) => {
  const { setYogaData, setSelectedYogaClass } = useYogaContext(); // changed code

  const handlePurchaseClick = () => {
    setYogaData({ className, price, details, id });
  };

  // console.log('yogaListItem id is:', id)
  // console.log('yogaClass', yogaClass)
  return (
    <div className="YogaListItem">
      <h2>{classDay}{startTime} {isMaxCapacity}</h2>
      <h3>Yoga Class</h3>
      <p>name: {className}</p>
      <p>price: {price}</p>
      <p>Is Max Capacity: {maxCapacity}</p>
      <p>details: {details}</p>
      <p>duration: {duration}</p>

      {user ? (
        isMaxCapacity ? (
          <p>Class Full!</p>
        ) : (
          <button onClick={handlePurchaseClick}>
            <Link to="/waiver">
              Purchase
            </Link>
          </button>
        )
      ) : (
        <button>
          <Link to="/login">
            Login
          </Link>
        </button>
      )}
    </div>
  );
};

export default YogaListItem;
