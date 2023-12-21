"use client";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { HomeService } from "../service/HomeService";
import { Container, Grid, Typography } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";

import Skeleton from "@mui/material/Skeleton";
import { useRouter } from "next/navigation";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HomeCard = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  async function fetchCards() {
    const result = await HomeService();
    setCard(result);

    setLoading(false);
  }
  const toastStyle = {
    borderRadius: "8px",
    padding: "16px",
    fontSize: "16px",
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <>
      <Container>
        <ToastContainer position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={toastStyle} />
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
                <Grid item xs={12} sm={6} md={6} lg={4} key={response.id}>
                  <Box>
                    <Card sx={{
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
                        sx={{ background: "#d4d5ee" }}
                      />
                      <CardMedia
                        component="img"
                        image={response.image}
                        alt={response.alt}
                        sx={{ cursor: "pointer", objectFit: 'cover' }}
                        onClick={() =>
                          router.push(`${response.id}/${response.slug}`)
                        }
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {response.description}
                        </Typography>
                      </CardContent>

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
