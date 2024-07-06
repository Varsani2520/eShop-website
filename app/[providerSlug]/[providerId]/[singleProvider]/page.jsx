'use client';
import style from "../../../styles/style.css";
import "react-toastify/dist/ReactToastify.css";
import { ProviderService } from "@/app/service/ProviderService";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
  IconButton,
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
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {  useRouter } from "next/navigation";

const Page = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [desc, setDesc] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { providerSlug } = useParams();
  const { singleProvider } = useParams();
  const carts = useSelector((state) => state.cart.cartItems);
  const token = useSelector((state) => state.auth.authUser);
const router=useRouter()
  function addToCart(item) {
    if (!token || !token.data) {
      toast.warning("Please log in to add to cart.");
      return;
    }
    const isItemInCart = carts.some((cartItems) => cartItems.id === item.id);
    if (isItemInCart) {
      toast.warning("Your item is already in your cart");
    } else {
      dispatch(addToCartItem({ ...item, quantity }));
      dispatch(incrementTotalCard());
      cartService(token.data.token, item);
      toast.success("Added to cart successfully");
    }
  }

  function handleQuantityChange(increment) {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + increment));
  }

  async function fetchDesc() {
    try {
      const response = await ProviderService(providerSlug);
      setDesc(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  const handleHoverChange = (index) => {
    setDesc((prevDesc) =>
      prevDesc.map((item, i) =>
        i === index ? { ...item, hover: !item.hover } : item
      )
    );
  };
  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor = theme.palette.mode === "light"
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
    fetchDesc();
    document.title = "SingleProvider | eRequirements";
  }, []);

  return (
    <Box>
      <Toast />
      <Box
        sx={{ background: theme.palette.background.card, height: 'maxContent' }}
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
              if (singleProvider == response.id) {
                const discountedPrice = response.price - (response.price * response.offer / 100);
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
                              className="add-to-cart-btn"
                              sx={{ background: theme.palette.background.button, color: theme.palette.background.text }}
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
                              Description: {response.description}
                            </Typography>
                            <Typography variant="h6" sx={{ textDecoration: 'line-through', color: 'red' }}>
                              Original Price: ${response.price}
                            </Typography>
                            <Typography variant="h6" sx={{ color: 'orange', fontSize: '24px' }}>
                              Discounted Price: ${discountedPrice.toFixed(2)}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                              <IconButton onClick={() => handleQuantityChange(-1)}>
                                <RemoveIcon />
                              </IconButton>
                              <Typography variant="h6" sx={{ mx: 2 }}>
                                {quantity}
                              </Typography>
                              <IconButton onClick={() => handleQuantityChange(1)}>
                                <AddIcon />
                              </IconButton>
                            </Box>
                            <br />
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
                              <CardHeader title={"Reviews"} sx={{ background: theme.palette.secondary.main }} />
                              {response.review}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Box>
                );
              }
            })}
        </Box>
{/* previos card */}
<Grid container spacing={3} sx={{ mt: 4 }}>
{
desc.map((response, index) => {
                  if (providerSlug == response.provider_id)
                    return (
                      <Grid
                        item
                        key={response.id}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={4}
                        onMouseEnter={() => handleHoverChange(index)}
                        onMouseLeave={() => handleHoverChange(index)}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            height: 0,
                            paddingBottom: "56.25%",
                          }}
                        >
                          <CardMedia
                            sx={{
                              cursor: "pointer",
                              objectFit: "cover",
                              position: "absolute",
                              width: "100%",
                              height: "100%",
                              top: 0,
                              left: 0,
                              borderRadius: "10px",
                            }}
                            component="img"
                            image={response.img}
                            alt={response.alt}
                            onClick={() =>
                              router.push(
                                `${response.provider_id}/${response.id}`
                              )
                            }
                          />
                          {/* Heart icon */}
                          <IconButton
                            sx={{
                              position: "absolute",
                              top: "10px",
                              right: "10px",
                              visibility: response.hover ? "visible" : "hidden",
                            }}
                            aria-label="add to favorites"
                            onClick={() => fav(response)}
                          >
                            {response.hover ? (
                              <FavoriteIcon color="error" />
                            ) : (
                              <FavoriteBorderIcon />
                            )}
                          </IconButton>
                        </div>
                        <CardContent
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            color: theme.palette.background.text,
                          }}
                        >
                          <Box sx={{ display: "block" }}>
                            <Typography>{response.title}</Typography>
                            <Rating
                              name="customized-icons"
                              defaultValue={response.rating}
                              readOnly
                            />
                          </Box>
                          <Typography>${response.price}</Typography>
                        </CardContent>
                      </Grid>
                    );
                  })}
                  </Grid>
      </Container>
    </Box>
  );
};

export default Page;
