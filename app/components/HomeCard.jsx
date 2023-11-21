"use client";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import { HomeService } from "../service/HomeService";
import { Checkbox, Container, Grid, Typography } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Skeleton from "@mui/material/Skeleton";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addToFavouriteItem, incrementTotalfav } from "../action/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HomeCard = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  async function fetchCards() {
    const result = await HomeService();
    setCard(result);
    console.log(result);
    setLoading(false);
  }
  const favourites = useSelector((state) => state.likes.favouriteItems);
  const dispatch = useDispatch();
  function fav(item) {
    console.log("htis is fav");

    const isItemInFav = favourites.some(
      (favouriteItems) => favouriteItems.id === item.id
    );
    if (isItemInFav) {
      toast.warning("Item already in the cart");
    } else {
      // Item is not in the cart, proceed to add it
      dispatch(addToFavouriteItem(item));
      dispatch(incrementTotalfav());
      toast.success("Added to favourite successfully");
    }
  }

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <>
      <Container>
        <ToastContainer />
        <Box sx={{ display: "flex" }}>
          <Grid container spacing={2}>
            {loading
              ? Array.from({ length: 6 }).map((_, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                  <Box>
                    <Card sx={{ maxWidth: 345 }}>
                      <Skeleton
                        variant="rectangular"
                        height={194}
                        animation="wave"
                      />
                      <CardContent>
                        <Skeleton animation="wave" />
                      </CardContent>
                    </Card>
                    <br />
                  </Box>
                </Grid>
              ))
              : card.map((response) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={response.id}>
                  <Box>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardHeader
                        title={response.title}
                        sx={{ background: "#d4d5ee" }}
                      />
                      <CardMedia
                        component="img"
                        height="194"
                        image={response.image}
                        alt={response.alt}
                        sx={{ cursor: "pointer" }}
                        onClick={() =>
                          router.push(`${response.id}/${response.slug}`)
                        }
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {response.description}
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <Checkbox
                          onClick={() => fav(response)}
                          inputProps={{ "aria-label": "Favorite" }}
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite color="secondary" />}
                        />
                        <Checkbox
                          inputProps={{ "aria-label": "Bookmark" }}
                          icon={<BookmarkBorderIcon />}
                          checkedIcon={<BookmarkIcon />}
                        />
                      </CardActions>
                    </Card>
                    <br />
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default HomeCard;
