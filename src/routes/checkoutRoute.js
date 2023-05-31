import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51NCr58IHm27428YaPJXBb0K1GpM8N6IEUON7m6kKuycil7rEXsXyj8nnwMkhjxCYsI6mrlCiP16e4aviPdbJ59YK00makpe4mj"
);

const checkoutRoute = () => {
  return <Elements stripe={stripePromise}></Elements>;
};
export default checkoutRoute;
