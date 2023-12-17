"use client";
import { summaryServices } from "@/app/service/summary";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  ListItem,
  Typography,
} from "@mui/material";
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
      setBooking(response.data);
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
      {Array.isArray(booking) &&
        booking.map((booking, index) => (
          <Card key={booking.id} sx={{ mb: 2 }}>
            <Grid container spacing={2} mt={5}>
              <Grid item xs={12} md={4}>
                <CardMedia
                  image={booking.img}
                  width={300}
                  height={140}
                  component="img"
                  alt="img"
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <CardContent>
                  <CardHeader>Name:{booking.name}</CardHeader>
                  <ListItem sx={{ py: 1, px: 0 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      price:{booking.price}
                    </Typography>
                    <Typography variant="subtitle1">
                      Quantity:{booking.quantity}
                    </Typography>
                  </ListItem>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        ))}
    </div>
  );
};

export default page;
