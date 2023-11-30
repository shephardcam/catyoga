import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import '../styles/payment.scss';

const PaymentPage = () => {
  const location = useLocation();
  const { search } = location || {}; // Check if location is available
  const queryParams = new URLSearchParams(search);

  const className = queryParams.get('name');
  const price = queryParams.get('price');
  const details = queryParams.get('details');

  return (
  <body>
    <div>
    <p>Confirm purchase of {className} for ${price}?</p>
    </div>
    <p> 
      description: {details}
    </p>
    <form className="payment-form">
      <div className="card-element">
        <CardElement />
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  </body>
  );
};

export default PaymentPage;
