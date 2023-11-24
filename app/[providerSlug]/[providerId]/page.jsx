"use client";
import React, { useEffect, useState } from "react";
import { ProviderService } from "../../service/ProviderService";
import { useParams, useRouter } from "next/navigation";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Breadcrumbs,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Grid,
  IconButton,
  Skeleton,
  Typography,
  emphasize,
  styled,
} from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { addToFavouriteItem, bookmarkitem, incrementTotalfav } from "@/app/action/action";
import 'react-toastify/dist/ReactToastify.css'
import { FavioriteService } from "@/app/service/get-faviourite";
import { bookmarkServices } from "@/app/service/bookmark";

const page = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { providerSlug } = useParams();
  const router = useRouter();
  const [desc, setdesc] = useState([]);
  const [loading, setLoading] = useState(true);
  const StyledBreadcrumb = styled(Chip)(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[800],
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[800],
        0.06
      ),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[800],
        0.12
      ),
    },
  }));
  async function Desc() {
    try {
      const response = await ProviderService(providerSlug);
      console.log("inside card", providerSlug);
      setdesc(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  const favourites = useSelector((state) => state.likes.favouriteItems);
  const bookmarkItems = useSelector((state) => state.bookmark.bookmarkItems);

  const token = useSelector((state) => state.auth.authUser.data.token);
  const dispatch = useDispatch();
  function fav(item) {

    const isItemInFav = favourites.some(
      (favouriteItems) => favouriteItems.id === item.id
    );
    if (isItemInFav) {
      toast.warning("Your Items is already in your WishList");
    } else {
      // Item is not in the cart, proceed to add it
      console.log(item);
      dispatch(addToFavouriteItem(item));
      dispatch(incrementTotalfav());
      FavioriteService(token, item)
      toast.success("Added to favourite successfully");
    }
  }
  function bookmark(item) {
    const isItemInBook = bookmarkItems.some((bookmarkItems) => bookmarkItems.id === item.id)
    
    if (isItemInBook) {
      toast.warning("item is already in your bookmark")
    }
    else {
      dispatch(bookmarkitem(item))
      bookmarkServices(token, item)
      toast.success("Bookmark Successfully")
    }
  }
  useEffect(() => {
    Desc();
  }, []);
  return (
    <div>
      <ToastContainer />
      <Box sx={{ background: "hotpink" }}>
        <Container>
          <Box sx={{ pt: 5, pb: 5 }}>
            <Breadcrumbs aria-label="breadcrumb">
              <a href="/" >
                <StyledBreadcrumb
                  component="a"
                  label="Home"
                  icon={<HomeIcon fontSize="large" />}
                />
              </a>
              <StyledBreadcrumb
                component="a"
                href="/about"
                label="Providers"
                icon={<ExpandMoreIcon />}
              />
            </Breadcrumbs>
            <Typography variant="h4" sx={{ mt: 4 }}>
              Providers
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box sx={{ display: "flex", mt: 10, justifyContent: "center" }}>
        <Container>
          <Grid container spacing={2}>
            {loading
              ? Array.from({ length: 3 }).map((index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
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
              : desc.map((response, index) => {
                if (providerSlug == response.provider_id)
                  return (
                    <Grid item key={response.provider_id + "_" + response.id}>
                      <Card sx={{ maxWidth: 350 }}>
                        <CardHeader
                          title={response.name}
                          sx={{ background: "#b7bfee" }}
                        />
                        <CardMedia
                          sx={{ cursor: "pointer" }}
                          component="img"
                          image={response.img}
                          alt={response.alt}
                          onClick={(e) =>
                            router.push(
                              `${response.provider_id}/${response.id}`
                            )
                          }
                        />

                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                            <Checkbox
                              onClick={() => fav(response)}
                              inputProps={{ "aria-label": "Favorite" }}
                              icon={<FavoriteBorder />}
                              checkedIcon={<Favorite color="secondary" />}
                            />
                          </IconButton>
                          <IconButton aria-label="bookmark">
                            <Checkbox
                              onClick={() => bookmark(response)}
                              icon={<BookmarkBorderIcon />}
                              checkedIcon={<BookmarkIcon />}
                            />
                          </IconButton>
                        </CardActions>
                      </Card>
                      <br />
                    </Grid>
                  );
              })}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default page;
