import React from 'react';
import "../styles/ThankYou.scss";
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <div className="thank-you-container">
      <h1 className="thank-you-header">Thank You!</h1>
      <p className="thank-you-message">Your purchase has been completed, we appreciate your business!</p>
      <div className='buttons'>
      <a>
      <Link to="/profile">
        see my classes
      </Link>
      </a>
      </div>
    </div>
  );
};

export default ThankYouPage;