import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Replace 'your-publishable-key' with your actual publishable key from the Stripe dashboard
const stripePromise = loadStripe('pk_test_A7jK4iCYHL045qgjjfzAfPxu');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
  </React.StrictMode>,
);
