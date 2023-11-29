import React from "react";
import StripeCheckout from "react-stripe-checkout";

const Paycheck = ({total}) => {
  const onToken = (token) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      key={process.env.stripeKey}
      label="Payment"
      name="eRequirement"
      billingAddress
      shippingAddress
      description={`Your total is ${total}`}
      amount={total *100}
      panelLabel="Stripe payment"
      token={onToken}
      stripeKey={process.env.KEY}
    />
  );
};

export default Paycheck;
