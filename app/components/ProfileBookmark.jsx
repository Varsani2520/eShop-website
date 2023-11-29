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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProfileBookmark = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.authUser.data.token);

  const [book, setBook] = useState([]);
  async function getBook() {
    const response = await getBookmark(token);
    setBook(response);
  }
   function rmv(item) {
    dispatch(bookmarkitemremove(response));
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
      <ToastContainer />

      <Box>
        {book.map((bookmark) => {
          console.log(bookmark);
          return (
            <>
              {bookmark.data.map((book) => {
                return (
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
                          {/* <Button onClick={() => rmv(bookmark)}>REMOVE</Button> */}
                          {/* pending */}
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Card>
                );
              })}
            </>
          );
        })}
      </Box>
    </div>
  );
};

export default ProfileBookmark;