"use client";
import { decrementTotalfav, removeToFavouriteItem } from "@/app/action/action";
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
import {emptyAnimation} from '../lottie-animation/emptyAnimation'
const ProfileFavourites = () => {
  const dispatch = useDispatch();

  const tokens = useSelector((state) => state.auth.authUser.data.token);

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

  return (
    <div>
      <ToastContainer />

      <div>
        {fav.length===0?(
          <><Lottie animationData={emptyAnimation}/></>
        ):(

        fav.map((likes) => {
          return (
            <>
              {likes.data.map((like) => {
                console.log(like);
                return (
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
                          {/* <Button >REMOVE</Button> */}
                          {/* pending */}
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Card>
                );
              })}
            </>
          );
        })
        )}
      </div>
    </div>
  );
};

export default ProfileFavourites;
