"use client";
import React from "react";
import { Grid, useTheme } from "@mui/material";
import Container from "@mui/material/Container/Container";
import Divider1 from "./components/Divider1.jsx";
import Slider1 from "./components/Slider1";
import Divider2 from "./components/Divider2";
import HomeCard from "./components/HomeCard";
import SwiperHome from "./components/SwiperHome.jsx";
import HomeService from "./components/HomeService.js";

const page = () => {
  const theme=useTheme()
  return (
    <Container maxWidth="lg" >
      <Grid container>
        <Grid item lg={12} md={12} xs={12} sx={{ mt: "1%" }}>
          <SwiperHome />
        </Grid>
      </Grid>
      <Divider2 />
      <HomeCard />
      {/* <HomeService /> */}
    </Container>
  );
};

export default page;
