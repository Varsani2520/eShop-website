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
  useTheme,
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

  const theme = useTheme()
  return (
    <Container>
      <Toast />
      <Box sx={{ mt: '10%', mb: '10%', background: theme.palette.background.card }}>
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
                <Card key={singleCart.id} sx={{ background: theme.palette.background.card, color: theme.palette.background.text }}>
                  {carts.length === 0 ? (
                    <img
                      src="https://w7.pngwing.com/pngs/277/965/png-transparent-empty-cart-illustration-thumbnail.png"
                      alt="empty cart img"
                    />
                  ) : (
                    <Grid container spacing={2} >
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
                        <CardContent>
                          <Typography>Name:{singleCart.name}</Typography>
                          <Typography>
                            Price:{singleCart.price && singleCart.quantity ? singleCart.price * singleCart.quantity : singleCart.price}
                          </Typography>
                          <Typography>
                            Quantity:
                            <Button onClick={() => handleDecrement(singleCart)} sx={{
                              background: theme.palette.background.button,
                              "&:hover": { backgroundColor: "#0069d9" },
                              color: theme.palette.background.text,
                            }}>-</Button>
                            {singleCart.quantity}
                            <Button onClick={() => handleIncrement(singleCart)} sx={{
                              background: theme.palette.background.button,
                              "&:hover": { backgroundColor: "#0069d9" },
                              color: theme.palette.background.text,
                            }}>+</Button>
                          </Typography>
                          <Button onClick={() => rmv(singleCart)} sx={{
                            background: theme.palette.background.button,
                            "&:hover": { backgroundColor: "#0069d9" },
                            color: theme.palette.background.text,
                          }}>REMOVE</Button>
                        </CardContent>
                      </Grid>
                    </Grid>
                  )}

                  {/* option */}
                </Card >
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
    </Container >
  );
};

export default CheckOut;
