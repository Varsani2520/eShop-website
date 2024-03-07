"use client";
import style from "../../../styles/style.css";
import "react-toastify/dist/ReactToastify.css";
import { ProviderService } from "@/app/service/ProviderService";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { emphasize, styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { addToCartItem, incrementTotalCard } from "@/app/action/action";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Toast from "@/app/components/Toast";
import { cartService } from "@/app/service/get-cart";
import { useTheme } from "@mui/material";

const page = () => {
  const theme = useTheme()
  const dispatch = useDispatch();
  const [desc, setdesc] = useState([]);
  const [loading, setLoading] = useState(true);
  const { providerSlug } = useParams();
  const { singleProvider } = useParams();
  const carts = useSelector((state) => state.cart.cartItems);
  const token = useSelector((state) => state.auth.authUser);

  function addToCart(item) {
    if (!token || !token.data) {
      toast.warning("please log in to add to cart.");
      return;
    }
    const isItemIncart = carts.some((cartItems) => cartItems.id === item.id);
    if (isItemIncart) {
      toast.warning("Your Items is already in your cart");
    } else {
      dispatch(addToCartItem(item));
      dispatch(incrementTotalCard());
      cartService(token.data.token, item);
      toast.success("Added to cart  successfully");
    }
  }

  async function Desc() {
    try {
      const response = await ProviderService(providerSlug);
      setdesc(response);
    } catch (error) {
      console.log(error);
    }
  }
  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      "&:hover, &:focus": {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      "&:active": {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  });
  useEffect(() => {
    Desc();
    document.title = "SingleProvider | eRequirements";
  }, []);

  return (
    <Box>
      <Toast />
      <Box
        sx={{ background: theme.palette.background.card, height: '15vh' }}
        mt={{ md: "4%", xs: "25%", sm: '15%' }}
      >
        <Container>
          <Box sx={{ pt: 2, pb: 2 }}>
            <Breadcrumbs aria-label="breadcrumb">
              <StyledBreadcrumb
                component="a"
                href="/"
                label="Home"
                icon={<HomeIcon fontSize="small" />}
              />
              <StyledBreadcrumb component="a" href="#" label="Provider" />
              <StyledBreadcrumb label="Services" icon={<ExpandMoreIcon />} />
            </Breadcrumbs>
            {desc.map((response) => {
              if (singleProvider == response.id)
                return (
                  <Box key={response.id}>
                    <Typography variant="h4" sx={{ mt: 4, color: theme.palette.background.text }}>
                      {response.name}
                    </Typography>
                  </Box>
                );
            })}
          </Box>
        </Container>
      </Box>

      <Container>
        <Box sx={{ height: '100vh' }}>
          {
            desc.map((response) => {
              if (
                singleProvider == response.id)
                return (
                  <Box key={response.id}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Card sx={{ maxWidth: "100%", mt: 10 }}>
                          <CardMedia
                            component="img"
                            sx={{ objectFit: "cover", height: '100%' }}
                            image={response.img}
                            alt={response.alt}
                          />
                        </Card>
                        <Box sx={{ mt: 5, mb: '30px', display: "flex", gap: 2 }}>
                          <Button
                            sx={{ background: theme.palette.background.button, color: theme.palette.background.text }}
                            variant="outlined"
                            className="add-to-cart-btn"
                            onClick={() => addToCart(response)}
                          >
                            Add to Cart
                          </Button>
                          <Link href="/pages/checkout">
                            <Button
                              variant="outlined"
                              className="add-to-cart-btn" sx={{ background: theme.palette.background.button, color: theme.palette.background.text }}
                            >
                              Buy Now
                            </Button>
                          </Link>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Card
                          sx={{
                            minWidth: 275,
                            mt: 10,
                            background: theme.palette.background.card
                          }}
                        >
                          <CardContent>
                            <Typography
                              sx={{ fontSize: 14 }}
                              color="text.secondary"
                              gutterBottom
                            >
                              {response.slug}
                            </Typography>
                            <Typography variant="h5" component="div">
                              {response.name}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              descriptions:{response.description}
                            </Typography>
                            <Typography variant="primary">
                              Price: {response.price}
                              <br />
                              offer:{response.offer}
                            </Typography>
                            <br />
                            rating:{" "}
                            <Rating
                              value={response.rating}
                              emptyIcon={
                                <StarIcon
                                  style={{ opacity: 0.55 }}
                                  fontSize="inherit"
                                />
                              }
                            />
                          </CardContent>
                        </Card>
                        <Card sx={{ mt: "5%", background: theme.palette.background.card }}>
                          <CardContent>
                            <Typography variant="h5">
                              <CardHeader title={"reviews"} sx={{ background: theme.palette.secondary.main }} />

                              {response.review}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Box>
                );
            })}
        </Box>
      </Container>
    </Box>
  );
};

export default page;
