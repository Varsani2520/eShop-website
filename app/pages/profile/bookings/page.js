"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const page = () => {
  const router = useRouter();
  const carts = useSelector((state) => state.cart.cartItems);

  

  return (
    <div>
      <h1>Your Order is Complete!</h1>
      <h2>Ordered Items:</h2>
      <ul>
        {carts.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default page;
