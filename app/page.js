"use client";
import React from "react";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container/Container";
import Divider1 from "./components/Divider1.jsx";
import Slider1 from "./components/Slider1";
import Divider2 from "./components/Divider2";
import HomeCard from "./components/HomeCard";
import SwiperHome from "./components/SwiperHome.jsx";

const page = () => {
  return (
    <Container maxWidth="lg">
      <Grid>
        <Grid item lg={12} md={12} xs={12} sx={{ mt: "10%" }}>
          <SwiperHome />
        </Grid>
      </Grid>

      <Divider1 />
      <Slider1 />
      <Divider2 />
      <HomeCard />
    </Container>
  );
};

export default page;
