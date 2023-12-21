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
  clearCart,
  decrementQuantityItem,
  decrementTotalCard,
  incrementQuantityItem,
  removeToCartItem,
} from "../action/action";
import { useRouter } from "next/navigation";
import Paycheck from "./paycheck";
import Toast from "./Toast";
import emptyProfile from '../lottie-animation/emptyProfile'
import Lottie from "lottie-react";

const CheckOut = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.cartItems);
  const tokens = useSelector((state) => state.auth.authUser.data.token);
  const [cart, setCart] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0);
  const calculateTotalPrice = () => {
    if (carts) {
      return carts.reduce((acc, item) => {
        const itemPrice = typeof item.price === 'number' ? item.price : 0;
        const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 1;
        return acc + itemPrice * itemQuantity;
      }, 0);
    }
    return 0;
  };

  useEffect(() => {
    if (carts) {
      setCart((prevCart) => carts.length);
      setTotalPrice((prevTotal) => calculateTotalPrice());
    }
  }, []);

  function rmv(item) {
    dispatch(removeToCartItem(item));
    dispatch(decrementTotalCard())
    toast.success("remove item success");
  }
  const handleIncrement = (cart) => {
    dispatch(incrementQuantityItem(cart));
  };
  const handleDecrement = (cart) => {
    dispatch(decrementQuantityItem(cart));
  };
  const router = useRouter()

  const handlePaymentSuccess = (paymentDetails) => {
    toast.success("Payment successful");
    dispatch({ type: 'SET_PAYMENT_DETAILS', payload: paymentDetails });
    router.push('/pages/address');
    dispatch(clearCart())
  };


  return (
    <Container>
      <Toast />
      <Box sx={{ mt: '10%', mb: '10%' }}>
        {
          carts.length > 0 && (

            <Breadcrumbs aria-label="breadcrumb">
              <Typography>Cart | {carts.length} Item</Typography>
            </Breadcrumbs>
          )
        }
      </Box>
      <Box>
        {carts.length === 0 ? (
          <Lottie animationData={emptyProfile} style={{ height: '200px' }} />
        ) : (
          carts.map((singleCart) => {
            return (
              <>
                <Card key={singleCart.id} sx={{ background: '#f0f0f0' }}>
                  {carts.length === 0 ? (
                    <img
                      src="https://w7.pngwing.com/pngs/277/965/png-transparent-empty-cart-illustration-thumbnail.png"
                      alt="empty cart img"
                    />
                  ) : (
                    <Grid container spacing={2} mt={5}>
                      <Grid item xs={6} md={4}>
                        <CardMedia
                          image={singleCart.img}
                          width={300}
                          height={540}
                          component="img"
                          alt="img"
                        />
                        {/* <Button onClick={() => router.push('/pages/address')}>Continue </Button> */}
                      </Grid>
                      <Grid item xs={6} md={2}>
                        <CardHeader>Name:{singleCart.name}</CardHeader>
                        <CardContent>
                          <Typography>
                            Price:{singleCart.price && singleCart.quantity ? singleCart.price * singleCart.quantity : singleCart.price}
                          </Typography>
                          <Typography>
                            Quantity:
                            <Button onClick={() => handleDecrement(singleCart)}>-</Button>
                            {singleCart.quantity}
                            <Button onClick={() => handleIncrement(singleCart)}>+</Button>
                          </Typography>
                          <Button onClick={() => rmv(singleCart)}>REMOVE</Button>
                        </CardContent>
                      </Grid>
                    </Grid>
                  )}

                  {/* option */}
                </Card>
              </>
            );
          })

        )
        }
        {
          carts.length > 0 && (

            <Paycheck total={totalPrice} onPaymentSuccess={handlePaymentSuccess} />
          )
        }
      </Box>
    </Container>
  );
};

export default CheckOut;
