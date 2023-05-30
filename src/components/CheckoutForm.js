import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { functions } from '../configs/firebaseConfig'; // Import your firebase configuration

const createPaymentIntent = functions.httpsCallable('createPaymentIntent');

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const {
      data: { clientSecret },
    } = await createPaymentIntent({ amount: 500 }); // Amount is in cents

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        console.log('Payment successful');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
}

export default CheckoutForm;
