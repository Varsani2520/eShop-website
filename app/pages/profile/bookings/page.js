"use client";

import { getSummaries } from "@/app/service/get-summary";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  ListItem,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const page = () => {
  const tokens = useSelector((state) => state.auth.authUser.data.token);
  const [booking, setBooking] = useState([]);

  async function Booking() {
    try {
      const response = await getSummaries(tokens);
      setBooking(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    Booking();
  }, []);
  const theme = useTheme();
  return (
    <div
      style={{
        background: theme.palette.background.card,
        color: theme.palette.background.text,
      }}
    >
      <h1>Your Bookings !</h1>
      {booking.slice(0, 501).map((response) => {
        return (
          <>
            {response.data.map((singlebooking) => {
              return (
                <Card key={singlebooking.id} sx={{ marginBottom: 2 }}>
                  <Grid container spacing={2} mt={5}>
                    <Grid item xs={12} md={4}>
                      <CardMedia
                        image={singlebooking.img}
                        sx={{ objectFit: "cover" }}
                        component="img"
                        alt="img"
                      />
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <CardContent>
                        <CardHeader>Name:{singlebooking.name}</CardHeader>

                        <ListItem sx={{ py: 1, px: 0 }}>
                          <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 700 }}
                          >
                            price:{singlebooking.price}
                          </Typography>

                          {/* <Typography variant="subtitle1">
                            Quantity:{singlebooking.quantity}
                          </Typography> */}
                        </ListItem>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              );
            })}
          </>
        );
      })}
    </div>
  );
};

export default page;
