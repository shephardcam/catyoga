import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import '../styles/payment.scss';

const PaymentPage = () => {
  return (
    <form className="payment-form">
      <div className="card-element">
        <CardElement />
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default PaymentPage;
