"use client";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Skeleton,
} from "@mui/material";

import { ToastContainer, toast } from "react-toastify";
const page = () => {
  const [cart, setCart] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setCart(carts.length);
    setLoading(false);
  }, []);

  return (
    <div>
      <ToastContainer />
      <Box sx={{ mt: 5 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography>Cart | {cart} Item</Typography>
        </Breadcrumbs>
      </Box>
      <Box>
        {loading ? (
          <Card>
            <Skeleton variant="rectangular" width={300} height={140} />
            <CardContent>
              <Skeleton valriant="text" />
              <Skeleton valriant="text" />
              <Skeleton valriant="text" />
            </CardContent>
          </Card>
        ) : (
          <Card>
            <img
              src="https://w7.pngwing.com/pngs/277/965/png-transparent-empty-cart-illustration-thumbnail.png"
              alt="empty cart img"
            />
            {/* option */}
            <Grid container spacing={2} mt={5}>
              <Grid item xs={6} md={4} key={cart.id}>
                <CardMedia
                  image={cart.img}
                  width={300}
                  height={140}
                  component="img"
                  alt="img"
                />
              </Grid>
              <Grid item xs={6} md={2}>
                <CardHeader>Name:{cart.name}</CardHeader>
                <CardContent>
                  <Typography>Price:{cart.price}</Typography>
                  <Typography>Quantity:1</Typography>
                  <Button >REMOVE</Button>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        )}
      </Box>
    </div>
  );
};

export default page;
