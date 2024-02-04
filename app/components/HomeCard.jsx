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
import { HomeService } from "../service/HomeService";
import { CardContent, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Skeleton from "@mui/material/Skeleton";

const HomeCard = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  async function fetchCards() {
    const result = await HomeService();
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
            ))
          ) : (
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                // when window width is <= 400px
                400: {
                  slidesPerView: 1,
                },
                // when window width is <= 768px
                768: {
                  slidesPerView: 2,
                },
                // when window width is <= 992px
                992: {
                  slidesPerView: 3,
                },
              }}
              style={{ height: "220px" }}
            >
              {card.map((response) => (
                <SwiperSlide key={response.id}>
                  <Card
                    sx={{
                      maxWidth: "100%",
                      transition: "transform 0.3s ease-in-out",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    <CardHeader
                      title={response.title}
                      sx={{ background: "#d4d5ee", fontWeight: "bold" }}
                    />
                    <CardMedia
                      component="img"
                      image={response.image}
                      alt={response.alt}
                      sx={{
                        cursor: "pointer",
                        objectFit: "cover",
                        maxHeight: "100%",
                      }}
                      onClick={() =>
                        router.push(`${response.id}/${response.slug}`)
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

export default HomeCard;
