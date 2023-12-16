"use client"
import { summaryServices } from "@/app/service/summary";
import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const page = () => {
  const tokens = useSelector((state) => state.auth.authUser.data.token);
  const carts = useSelector((state) => state.cart.cartItems);
  const date = new Date();
  const [booking, setBooking] = useState(null);

  async function Booking() {
    try {
      const response = await summaryServices(tokens, carts, "pending", date);
      setBooking(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Booking();
  }, []);

  return (
    <div>
      <h1>Your Bookings !</h1>
      {booking && (
        <div>
          <Card>
            <h1>Order Date:{booking.date}</h1>
            <h1>Status:{booking.status}</h1>
          </Card>
        </div>
      )}
    </div>
  );
};

export default page;
