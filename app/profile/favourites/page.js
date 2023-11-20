"use client";
import { removeToFavouriteItem } from "@/app/action/action";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const page = () => {
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favourite.favouriteItems);
  console.log("fav is",favs);
  const cartCount = useSelector((state) => state.favourite.cartCount);

  const [fav, setFav] = useState(0);
  function rmv(item) {
    dispatch(removeToFavouriteItem(item));

    const updatedCartCount = cartCount - 1;
    updateCartCountAction(updatedCartCount);
  }
  useEffect(() => {
    if (favs) {
      setFav(favs.length);
    }
  }, [favs]);
  return (
    <div>
      <div>
        <ToastContainer />

        <Box>
          {favs && favs.map((favourite) => (
            <Card key={favourite.id}>
              {favs.length === 0 ? (
                <div>

                <img
                  src="https://w7.pngwing.com/pngs/277/965/png-transparent-empty-cart-illustration-thumbnail.png"
                  alt="empty cart img" width="300px"
                />
                <Typography>no item in favourite</Typography>
                </div>
              ) : (
                <Grid container spacing={2} mt={5}>
                  <Grid item xs={6} md={4}>
                    <CardMedia
                      image={favourite.img}
                      width={300}
                      height={140}
                      component="img"
                      alt="img"
                    />
                  </Grid>
                  <Grid item xs={6} md={2}>
                    <CardContent>
                      <Typography> {favourite.name}</Typography>
                      <Typography>rating:{favourite.rating}</Typography>
                      <Typography>Price:{favourite.price}</Typography>

                      <Button >REMOVE</Button>
                    </CardContent>
                  </Grid>
                </Grid>
              )}

              {/* option */}
            </Card>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default page;
