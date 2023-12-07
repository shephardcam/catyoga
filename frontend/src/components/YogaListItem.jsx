import React from 'react';
import '../styles/yogaListItem.scss';
import { useYogaContext } from './YogaContext';
import { Link } from 'react-router-dom';

const YogaListItem = ({ className, price, details, duration, classDay, startTime, isMaxCapacity, maxCapacity, user, id, yogaClass }) => {
  const { setYogaData, setSelectedYogaClass } = useYogaContext(); // changed code

  const handlePurchaseClick = () => {
    setYogaData({ className, price, details, id });
    setSelectedYogaClass(yogaClass); // changed code
  };

  // console.log('yogaListItem id is:', id)
  // console.log('yogaClass', yogaClass)
  return (
    <div className="YogaListItem">
      <h2>{classDay} {startTime} {isMaxCapacity}</h2>
      <h3>{className}</h3>
      <p>Price: ${price}</p>
      <p>Capacity: {maxCapacity}</p>
      <p>Details: {details}</p>
      <p>Duration: {duration}</p>

      {user ? (
        isMaxCapacity ? (
          <h1>The class is full</h1>
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
