const functions = require('firebase-functions');
const stripe = require('stripe')(
  'sk_test_51Kap7ZAWOw9ggBKGnfgIELyaYbN0q8lsa4GaGHf7XYMT0OSVdRKsff5UIWL8v0Zk0uxcz9qH3OCoGFQrE8zv9OGU0066GElZCh',
);

exports.createPaymentIntent = functions.https.onCall(async (data, context) => {
  const amount = data.amount; // Amount should be in cents
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
  });
  return {
    clientSecret: paymentIntent.client_secret,
  };
});
