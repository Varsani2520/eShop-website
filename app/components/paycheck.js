import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { clearCart } from "../action/action";
import { summaryServices } from "../service/summary";
const Paycheck = ({ total, onPaymentSuccess }) => {
  const carts = useSelector((state) => state.cart.cartItems);
  const tokens = useSelector((state) => state.auth.authUser.data.token);
  const date = new Date();
  const dispatch = useDispatch();

  async function paymentSuccess() {
    try {
      const response = await summaryServices(tokens, carts, "pending", date);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const onToken = async (token) => {
    console.log("payment", carts);
    // summery here
    // dispatch(clearCart());
    onPaymentSuccess(token);
    paymentSuccess();
  };

  return (
    <StripeCheckout
      key={process.env.KEY}
      label="Payment"
      name="eRequirement"
      description={`Your total is ${total}`}
      amount={total * 100}
      panelLabel="payment"
      token={onToken}
      stripeKey={process.env.NEXT_PUBLIC_STRIPE_KEY}
    />
  );
};

export default Paycheck;
