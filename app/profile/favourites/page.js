"use client";
import { decrementTotalfav, removeToFavouriteItem } from "@/app/action/action";
import { LinkedCameraSharp } from "@mui/icons-material";
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
import "react-toastify/dist/ReactToastify.css";
const page = () => {
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.likes.favouriteItems);
  console.log(favs);

  const [likes, setLikes] = useState(0);
  function rmv(item) {
    dispatch(removeToFavouriteItem(item));
    dispatch(decrementTotalfav());
    toast.success("remove favourite sucess");
  }
  useEffect(() => {
    if (favs) {
      setLikes(favs.length);
    }
  }, [favs]);
  return (
    <div>
      <div>
        <ToastContainer />

        <Box>
          {favs &&
            favs.map((likes) => (
              <Card key={likes.id}>
                {favs.length === 0 ? (
                  <div>
                    <img
                      src="https://w7.pngwing.com/pngs/277/965/png-transparent-empty-cart-illustration-thumbnail.png"
                      alt="empty cart img"
                      width="300px"
                    />
                    <Typography>no item in favourite</Typography>
                  </div>
                ) : (
                  <Grid container spacing={2} mt={5}>
                    <Grid item xs={6} md={4}>
                      <CardMedia
                        image={likes.image}
                        width={300}
                        height={140}
                        component="img"
                        alt="img"
                      />
                    </Grid>
                    <Grid item xs={6} md={2}>
                      <CardContent>
                        <Typography> {likes.name}</Typography>
                        <Typography>rating:{likes.rating}</Typography>
                        <Typography>Price:{likes.price}</Typography>

                        <Button onClick={() => rmv(likes)}>REMOVE</Button>
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
