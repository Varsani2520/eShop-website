"use client";

import { getFaviorites } from "@/app/service/getFaviourite";
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
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emptyProfile from '../lottie-animation/emptyProfile'
import { decrementTotalfav, removeToFavouriteItem } from "../action/action";
const ProfileFavourites = () => {
  const dispatch = useDispatch();

  const tokens = useSelector((state) => state.auth.authUser.data.token);
  const favs = useSelector((state) => state.likes.favouriteItems);

  const [fav, setFav] = useState([]);

  async function getFav() {
    const response = await getFaviorites(tokens);
    setFav(response);
  }
  const toastStyle = {
    borderRadius: "8px",
    padding: "16px",
    fontSize: "16px",
  };
  useEffect(() => {
    getFav();
  }, []);
  function rmv(item) {
    dispatch(removeToFavouriteItem(item));
    dispatch(decrementTotalfav())
    toast.success("remove item success");


  }
  return (
    <div>
      <ToastContainer />

      <div>
        {favs.length === 0 ? (
          <><Lottie animationData={emptyProfile} /></>
        ) : (

          favs.map((like) => (


            <Card key={like.id}>
              <Grid container spacing={2} mt={5}>
                <Grid item xs={6} md={4}>
                  <CardMedia
                    image={like.img}
                    width={300}
                    height={140}
                    component="img"
                    alt="img"
                  />
                </Grid>
                <Grid item xs={6} md={2}>
                  <CardContent>
                    <Typography>{like.name}</Typography>
                    <Typography>rating: {like.rating}</Typography>
                    <Typography>Price: {like.price}</Typography>
                    <Button onClick={() => rmv(like)}>REMOVE</Button>

                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default ProfileFavourites;
