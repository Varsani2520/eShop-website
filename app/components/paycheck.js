import React from "react";
import StripeCheckout from "react-stripe-checkout";

const Paycheck = ({ total,onPaymentSuccess }) => {
  const onToken = (token) => {
    console.log(token);
    onPaymentSuccess(token)
  };

  return (
    <StripeCheckout
      key={process.env.KEY}
      label="Payment"
      name="eRequirement"
      billingAddress
      shippingAddress
      description={`Your total is ${total}`}
      amount={total * 100}
      panelLabel="Stripe payment"
      token={onToken}
      stripeKey={process.env.NEXT_PUBLIC_STRIPE_KEY}
    />
  );
};

export default Paycheck;
