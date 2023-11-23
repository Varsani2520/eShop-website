"use client";
import React from "react";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container/Container";
import Divider1 from "./components/Divider1.jsx";
import Slider1 from "./components/Slider1";
import Divider2 from "./components/Divider2";
import HomeCard from "./components/HomeCard";

const page = () => {
  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item lg={12} md={12} xs={12} sx={{ mt: "10%" }}>
          {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRkYirTLhuwtOs47q2Dm3Ob1pEfQ_eXYeCUA&usqp=CAU"
            height="auto"
            width="100%"
            alt="welcome"
            style={{ maxWidth: "800px" }} */}
            <Slider1/>
          
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
