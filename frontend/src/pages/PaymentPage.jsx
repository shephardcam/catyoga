import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useYogaContext } from '../components/YogaContext';
import '../styles/payment.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PaymentPage = ({ user, yogaClasses }) => {
  const { state } = useYogaContext();
  console.log('Context State:', state);
  const { className, price, details, id } = state; //this is yoga_class_info so it is not used to book a class. I need yoga_classes for the unique ID

  //classname, price details and id are all being imported in state for the get post request :)

  // new stuff
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {

      // Send/post payment to server
      const response = await axios.post('/api/registered-classes', {
        userId: user.id,
        yogaClassId: id,
        isPaid: true,
      });

      console.log('Registration success:', response.data);
      navigate('/thankyou');
    } catch (error) {
      console.error('Error processing payment', error);
    }
  }

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
        <button type="submit" className="submit-button" onClick={handlePayment}>
        <Link to="/thankyou">
        checkout
      </Link>
        </button>
      </form>
    </body>
  );
};

export default PaymentPage;
