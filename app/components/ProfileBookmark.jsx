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
  const token = useSelector((state) => state.auth.authUser.data.token);
  const books = useSelector((state) => state.bookmark.bookmarkItems)
  const [book, setBook] = useState([]);
  async function getBook() {
    const response = await getBookmark(token);
    setBook(response);
  }
  function rmv(item) {
    dispatch(bookmarkitemremove(item));
    toast.success("remove bookmark success");
  }
  const toastStyle = {
    borderRadius: "8px",
    padding: "16px",
    fontSize: "16px",
  };
  useEffect(() => {
    getBook();
  }, []);

  return (
    <div>
      <Toast />

      <Box>
        {books.length === 0 ? (
          <><Lottie animationData={emptyProfile} /></>
        ) : (

          books.map((book) => (
            <Card key={book.id}>
              <Grid container spacing={2} mt={5}>
                <Grid item xs={6} md={4}>
                  <CardMedia
                    image={book.img}
                    width={300}
                    height={140}
                    component="img"
                    alt="img"
                  />
                </Grid>
                <Grid item xs={6} md={2}>
                  <CardContent>
                    <Typography>{book.name}</Typography>
                    <Typography>rating: {book.rating}</Typography>
                    <Typography>Price: {book.price}</Typography>
                    <Button onClick={() => rmv(book)}>REMOVE</Button>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          ))
        )}
      </Box>
    </div>
  );
};

export default ProfileBookmark;
