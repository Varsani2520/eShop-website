"use client";
import React, { useEffect, useState } from "react";
import { Card, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getSummaries } from "@/app/service/get-summary";

const NotificationPage = () => {
  const token = useSelector((state) => state.auth.authUser.data.token);

  const [summary, setSummary] = useState([]);

  async function SummaryData() {
    try {
      const response = await getSummaries(token);
      console.log("Response:", response);
      setSummary(response || []);
    } catch (error) {
      console.error("Error fetching summary data:", error);
    }
  }

  useEffect(() => {
    SummaryData();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      {summary &&
        summary.map((result) => {
          return (
            <>
              <Card key={result._id}>
                🔔 Your Service Order Placed Success 🥳
                <br />
                <Typography>Your service order has been received.</Typography>
                <h1>Date: {result.date}</h1>
                <h1>Status: {result.status}</h1>
              </Card>
            </>
          );
        })}
    </div>
  );
};

export default NotificationPage;
