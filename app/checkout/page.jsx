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
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantityItem,
  decrementTotalCard,
  incrementQuantityItem,
  removeToCartItem,
} from "../action/action";

const page = () => {
 
  const carts = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();
  const [cart, setCart] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setCart(carts.length);
    setLoading(false);
  }, [carts]);

  function rmv(item) {
    dispatch(removeToCartItem(item));
    dispatch(decrementTotalCard())
    toast.success("remove item success");


  }

  const handleIncrement = (cart) => {
    dispatch(incrementQuantityItem(cart)); // Dispatch the incrementQuantity action
  };

  const handleDecrement = (cart) => {
    dispatch(decrementQuantityItem(cart));
  };
  const toastStyle = {
    borderRadius: "8px",
    padding: "16px",
    fontSize: "16px",
  };
  return (
    <div>
      <ToastContainer  position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={toastStyle} />
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
          carts.map((cart) => (
            <Card key={cart.id} sx={{background:'#f0f0f0'}}>
              {carts.length === 0 ? (
                <img
                  src="https://w7.pngwing.com/pngs/277/965/png-transparent-empty-cart-illustration-thumbnail.png"
                  alt="empty cart img"
                />
              ) : (
                <Grid container spacing={2} mt={5}>
                  <Grid item xs={6} md={4}>
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
                      <Typography>
                        Price:{cart.price * cart.quantity}
                      </Typography>
                      <Typography>
                        Quantity:
                        <Button onClick={() => handleDecrement(cart)}>-</Button>
                        {cart.quantity}
                        <Button onClick={() => handleIncrement(cart)}>+</Button>
                      </Typography>
                      <Button onClick={() => rmv(cart)}>REMOVE</Button>
                    </CardContent>
                  </Grid>
                </Grid>
              )}

              {/* option */}
            </Card>
          ))
        )}
      </Box>
    </div>
  );
};

export default page;
