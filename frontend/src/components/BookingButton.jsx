import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BookingButton.scss';

const BookingButton = ({ className, price, details }) => {

  const handleButtonClick = () => {
    console.log('Booking button clicked!');
    
  };

  return (
    <button className="button" onClick={handleButtonClick}>
       <Link to={`/waiver?name=${className}&price=${price}&details=${details}`}>
              Purchase
            </Link>
    </button>
  );
};

export default BookingButton;