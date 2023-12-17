"use client";
import React, { useEffect, useState } from "react";
import { Card, Typography } from "@mui/material";
import { summaryServices } from "@/app/service/summary";
import { useSelector } from "react-redux";

const NotificationPage = () => {
  const token = useSelector((state) => state.auth.authUser.data.token);
  const carts = useSelector((state) => state.cart.cartItems);
  const [summary, setSummary] = useState({});

  async function SummaryData() {
    const response = await summaryServices(token, carts, "pending", new Date());
    setSummary(response);
    console.log(response);
  }

  useEffect(() => {
    SummaryData();
  }, []);

  return (
    <div>
      <Card>
        {/* Display date and status */}
        🔔Your Service Order Placed Success🥳
        <br />
        <Typography>Your service order has ben received.</Typography>
        <h1> Date: {new Date(summary.date).toLocaleString()}</h1>
      </Card>
    </div>
  );
};

export default NotificationPage;
