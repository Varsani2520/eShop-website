"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { CardContent, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Skeleton from "@mui/material/Skeleton";
import { HomeProviderService } from "../service/HomeProviderService";

const HomeService = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  async function fetchCards() {
    const result = await HomeProviderService({ id: 1 });

    setCard(result);
    setLoading(false);
  }

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#fff",
          paddingTop: "30px",
          paddingLeft: "30px",
          paddingRight: "30px",
          height: "220px",
          marginBottom: "30px",
          position: "relative", // Add this style
        }}
      >
        <Grid container spacing={2}>
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
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
          ) : (
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={50}
              slidesPerView={4}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              style={{ height: "220px" }}
            >
              {card.map((response) => (
                <SwiperSlide key={response.id}>
                  <Card
                    sx={{
                      maxWidth: "100%",

                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={response.img}
                      alt={response.alt}
                      sx={{
                        cursor: "pointer",
                        objectFit: "cover",
                        maxHeight: "100%",
                      }}
                      onClick={() =>
                        router.push(`${response.provider_id}/${response.id}`)
                      }
                    />
                  </Card>
                </SwiperSlide>
              ))}
              <div
                className="swiper-button-next"
                style={{
                  color: "black",
                  backgroundColor: "white",
                  position: "absolute",
                  top: "50%",
                  padding: "5px",
                  transform: "translateY(-50%)",
                }}
              ></div>
              <div
                className="swiper-button-prev"
                style={{
                  color: "black",
                  backgroundColor: "#fff",
                  position: "absolute",
                  padding: "5px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              ></div>
            </Swiper>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default HomeService;
