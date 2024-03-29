"use client";
import { bookmarkitemremove } from "@/app/action/action";
import { getBookmark } from "@/app/service/getBookmark";
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
import Toast from "./Toast";
const ProfileBookmark = () => {
  const dispatch = useDispatch();
  const tokens = useSelector((state) => state.auth.authUser.data.token);
  const [book, setBook] = useState([]);
  const books = async function getBook() {
    try {
      const response = await getBookmark(tokens);
      setBook(response);
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  function rmv(item) {
    dispatch(bookmarkitemremove(item));
    toast.success("remove bookmark success");
  }
  useEffect(() => {
    books();
  }, []);
  const theme = useTheme()
  return (
    <div style={{ background: theme.palette.background.card }}>
      <Toast />
      <Box sx={{ mt: '5%' }}>
        {book.length === 0 ? (
          <><Lottie animationData={emptyProfile} style={{ height: '200px' }} /></>
        ) : (

          book.map((response) => {
            return (<>
              {response.data.map((singleBook) => {
                return (
                  <Card key={singleBook.id} sx={{ background: theme.palette.background.card }}>
                    <Grid container spacing={2} mt={5}>
                      <Grid item xs={6} md={4}>
                        <CardMedia
                          image={singleBook.img}
                          sx={{ objectFit: 'cover' }}
                          component="img"
                          alt="img"
                        />
                      </Grid>
                      <Grid item xs={6} md={2}>
                        <CardContent>
                          <Typography>{singleBook.name}</Typography>
                          <Typography>rating: {singleBook.rating}</Typography>
                          <Typography>Price: {singleBook.price}</Typography>
                          {/* <Button onClick={() => rmv(book)}>REMOVE</Button> */}
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
      </Box>
    </div>
  );
};

export default ProfileBookmark;
