import { CardElement } from '@stripe/react-stripe-js';

const PaymentPage = () => {
  return (
    <form>
      <CardElement />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PaymentPage;
