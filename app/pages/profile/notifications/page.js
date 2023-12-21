"use client";
import React, { useEffect, useState } from "react";
import { Box, Card, CardHeader, Typography } from "@mui/material";
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
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(new Date(dateString));
  };
  useEffect(() => {
    SummaryData();
  }, []);

  return (
    <div>
      {summary &&
        summary.map((result) => {
          return (
            <>
              <Card key={result.id} >
                <CardHeader
                 action={
                  <Box sx={{border:'1px solid grey',p:0.5}}>
                    <Typography variant="body2"sx={{color:'grey'}}>{result.status}</Typography>
                  </Box>
                }
                  title="Your Order is Completed 🥳"
                  subheader={formatDate(result.date)}
                />
              </Card>
            </>
          );
        })}
    </div>
  );
};

export default NotificationPage;
