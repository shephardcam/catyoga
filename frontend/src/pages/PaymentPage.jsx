import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { useYogaContext } from '../components/YogaContext';
import '../styles/payment.scss';
import { Link } from 'react-router-dom';

const PaymentPage = () => {
  const { state } = useYogaContext();
  console.log('Context State:', state);
  const { className, price, details, id } = state;

//classname, price details and id are all being imported in state for the get post request :)

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
        <Link to="/thankyou">
        checkout
      </Link>
        </button>
      </form>
    </body>
  );
};

export default PaymentPage;
