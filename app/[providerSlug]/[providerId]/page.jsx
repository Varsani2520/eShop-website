'use client'
import React, { useEffect, useState } from "react";
import { ProviderService } from "../../service/ProviderService";
import { useParams, useRouter } from "next/navigation";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToFavouriteItem, incrementTotalfav } from "@/app/action/action";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import ProviderHeader from "@/app/components/ProviderHeader.jsx";

const Page = () => {
  const dispatch = useDispatch();
  const { providerSlug, providerId } = useParams();
  const params = useParams();
  const router = useRouter();
  const [desc, setDesc] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  async function fetchDesc() {
    try {
      const response = await ProviderService(providerSlug);
      setDesc(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchDesc();
    document.title = "provider | eRequirements";
  }, []);

  const fav = (response) => {
    dispatch(addToFavouriteItem(response));
    dispatch(incrementTotalfav());
    toast.success("Add Favourite Successfully");
  };

  const handleHoverChange = (index) => {
    setDesc((prevDesc) =>
      prevDesc.map((item, i) =>
        i === index ? { ...item, hover: !item.hover } : item
      )
    );
  };

  const sortByNameAZ = () => {
    const sortedData = [...desc].sort((a, b) => a.title.localeCompare(b.title));
    setDesc(sortedData);
  };

  const sortByNameZA = () => {
    const sortedData = [...desc].sort((a, b) => b.title.localeCompare(a.title));
    setDesc(sortedData);
  };

  const sortByPriceLowHigh = () => {
    const sortedData = [...desc].sort((a, b) => a.price - b.price);
    setDesc(sortedData);
  };

  const sortByPriceHighLow = () => {
    const sortedData = [...desc].sort((a, b) => b.price - a.price);
    setDesc(sortedData);
  };

  return (
    <div>
      <ProviderHeader
        setFilteredData={setDesc}
        sortByNameAZ={sortByNameAZ}
        sortByNameZA={sortByNameZA}
        sortByPriceLowHigh={sortByPriceLowHigh}
        sortByPriceHighLow={sortByPriceHighLow}
        title={providerId}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "30px",
          mb: "30px",
          position: "relative",
          height: "max-content",
        }}
      >
        <Container>
          <Grid container spacing={2}>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                    <Box>
                      <Card sx={{ maxWidth: "100%" }}>
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
                            <Typography sx={{fontWeight:'bold'}}>free delivery</Typography>
                            <Rating
                              name="customized-icons"
                              defaultValue={response.rating}
                              readOnly
                            />
                          </Box>
                          <Typography sx={{fontWeight:'bold',fontSize:'24px'}}>&#8377;{response.price}</Typography>
                        </CardContent>
                      </Grid>
                    );
                })}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Page;
