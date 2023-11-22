import React from "react";
import StripeCheckout from "react-stripe-checkout";

const Paycheck = () => {
  const onToken = (token) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      key={""}
      label="Payment"
      name="eRequirement"
      billingAddress
      shippingAddress
      description={`Your total is 100`}
      amount={100}
      panelLabel="Stripe payment"
      token={onToken}
      stripeKey={process.env.KEY}
    />
  );
};

export default Paycheck;
