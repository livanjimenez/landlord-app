import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { httpsCallable } from "firebase/functions";
import { functions } from "../configs/firebaseConfig";
import { Box, Paper, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "20px",
}));

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log("Error creating payment method: ", error);
      return;
    }

    const createPaymentIntent = httpsCallable(functions, "createPaymentIntent");
    const { data: clientSecret } = await createPaymentIntent({ amount: 1000 });

    const { error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: paymentMethod.id,
      }
    );

    if (confirmError) {
      console.log("Error confirming payment: ", confirmError);
      return;
    }

    console.log("Payment confirmed successfully!");
  };

  return (
    <StyledBox>
      <StyledPaper elevation={3}>
        <Typography variant="h4" align="center" gutterBottom>
          Rent Payment
        </Typography>
        <form onSubmit={handleSubmit}>
          <CardElement />
          <Button variant="contained" color="primary" type="submit">
            Pay Rent
          </Button>
        </form>
      </StyledPaper>
    </StyledBox>
  );
};

export default CheckoutForm;
