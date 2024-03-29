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
  useTheme,
} from "@mui/material";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emptyProfile from '../lottie-animation/emptyProfile'
import { decrementTotalfav, removeToFavouriteItem } from "../action/action";
import Toast from "./Toast";
const ProfileFavourites = () => {
  const dispatch = useDispatch();
  const tokens = useSelector((state) => state.auth.authUser.data.token);
  const [fav, setFav] = useState([]);
  const favs = async function getFav() {
    try {
      const response = await getFaviorites(tokens)
      setFav(response);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    favs()
  }, []);
  function rmv(item) {
    dispatch(removeToFavouriteItem(item));
    dispatch(decrementTotalfav())
    toast.success("remove item success");
  }
  const theme = useTheme()
  return (
    <div style={{ background: theme.palette.background.card, }}>
      <Toast />
      <div >
        {fav.length === 0 ? (
          <Lottie animationData={emptyProfile} style={{ height: '200px' }} />
        ) : (
          fav.map((response) => {
            return (
              <>
                {response.data.map((singleFav) => {
                  return (
                    <Card key={singleFav.id} sx={{ background: theme.palette.background.card, color: theme.palette.background.text }}>
                      <Grid container spacing={2} mt={5}>
                        <Grid item xs={6} md={4}>
                          <CardMedia
                            image={singleFav.img}
                            sx={{ objectFit: 'cover' }}
                            component="img"
                            alt="img"
                          />
                        </Grid>
                        <Grid item xs={6} md={2}>
                          <CardContent>
                            <Typography>{singleFav.name}</Typography>
                            <Typography>rating: {singleFav.rating}</Typography>
                            <Typography>Price: {singleFav.price}</Typography>
                            {/* pending */}
                            {/* <Button onClick={() => rmv(response)}>REMOVE</Button> */}
                          </CardContent>
                        </Grid>
                      </Grid>
                    </Card>

                  )
                })}
              </>
            )
          })
        )}
      </div>
    </div>
  );
};

export default ProfileFavourites;
