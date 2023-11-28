"use client";
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
import {  toast } from "react-toastify";
import { emphasize, styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { addToCartItem, incrementTotalCard } from "@/app/action/action";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Toast from "@/app/components/Toast";

const page = () => {
  const carts = useSelector((state) => state.cart.cartItems);
  const token = useSelector((state) => state.auth.authUser)
  const dispatch = useDispatch();
  function hello(item) {
    if (!token || !token.data) {
      toast.warning("please log in to add to cart.")
      return;
    }    // Check if the item is already in the cart
    const isItemInCart = carts.some((cartItems) => cartItems.id === item.id);

    if (isItemInCart) {
      toast.warning("Item already in the cart");
    } else {
      // Item is not in the cart, proceed to add it

      dispatch(addToCartItem(item));
      dispatch(incrementTotalCard());
      toast.success("Added to cart successfully");
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

  const [hlo, setHlo] = useState([]);
  const { providerSlug } = useParams();
  const { singleProvider } = useParams();

  async function Providers() {
    try {
      const response = await ProviderService(providerSlug);
      setHlo(response);
    } catch (error) {
      console.log(error);
    }
  }
  
  
  useEffect(() => {
    Providers();
    document.title = "SingleProvider | eRequirements"
  }, []);

  return (
    <Box>
      <Toast/>
      <Box sx={{ background: "hotpink" }} mt={{ md: '5%', xs: '10%' }}>
        <Container>
          <Box sx={{ pt: 5, pb: 5 }}>
            <Breadcrumbs aria-label="breadcrumb">
              <StyledBreadcrumb
                component="a"
                href="#"
                label="Home"
                icon={<HomeIcon fontSize="small" />}
              />
              <StyledBreadcrumb component="a" href="#" label="Provider" />
              <StyledBreadcrumb
                label="Services"
                deleteIcon={<ExpandMoreIcon />}
              />
            </Breadcrumbs>
            {
              hlo.map((response) => {
                if (singleProvider == response.id)
                  return (

                    <Typography variant="h4" sx={{ mt: 4 }}>{response.name}</Typography>
                  )
              })
            }
          </Box>
        </Container>
      </Box>

      <Container>
        <Box sx={{ mt: 10 }}>
          {hlo.map((response) => {
            if (singleProvider == response.id)
              return (
                <Box key={response.id}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Card sx={{ maxWidth: 500, mt: 10 }}>
                        <CardMedia
                          sx={{ height: 700 }}
                          image={response.img}
                          alt={response.alt}

                        />
                      </Card>
                      <Box sx={{ mt: 5 }}>
                        <Button
                          variant="outlined"
                          onClick={() => hello(response)}
                        >
                          Add to Cart
                        </Button>
                        <Link href="/checkout">
                          <Button variant="outlined">Buy Now</Button>
                        </Link>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Card
                        sx={{
                          minWidth: 275,
                          background: "#b7bfee",
                          mt: 10,
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
                      <Card sx={{ mt: "10%" }}>
                        <CardContent>
                          <Typography variant="h5">
                            <CardHeader sx={{ background: "hotpink" }}>
                              Reviews:
                            </CardHeader>
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
