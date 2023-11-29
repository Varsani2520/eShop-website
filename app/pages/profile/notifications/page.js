"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const NotificationPage = () => {
  const router = useRouter();
  const carts = useSelector((state) => state.cart.cartItems);
  const favs = useSelector((state) => state.likes.favouriteItems);
  

  return (
    <div>
      
      <h2>Ordered Items:</h2>
      <ul>
        {carts.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
<hr/>
      <h2>favourite Items:</h2>
      <ul>
        {favs.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

    </div>
  );
};

export default NotificationPage;
