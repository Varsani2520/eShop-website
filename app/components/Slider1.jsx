"use client"
import React from "react";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container/Container";
import style from '../styles/style.css'

const Slider1 = () => {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img
              src="https://img.freepik.com/free-vector/kids-toys-design_24908-56648.jpg?size=626&ext=jpg&ga=GA1.1.248855276.1696004271&semt=ais"
              alt="img"
              style={{ width: '100%',height:'100%' }} // Full width on all screen sizes
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="https://img.freepik.com/free-vector/toy-store-cartoon-landing-page-shop-showcase_107791-14657.jpg?size=626&ext=jpg&uid=R121733695&ga=GA1.1.248855276.1696004271&semt=ais"
              alt="img"
              style={{ width: '100%' ,height:'100%'}} // Full width on all screen sizes
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="https://img.freepik.com/free-psd/banner-template-with-cooking_23-2148543090.jpg"
              alt="img"
              style={{ width: '100%' }} // Full width on all screen sizes
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="https://img.freepik.com/free-psd/new-house-real-estate-landing-page_23-2148855243.jpg"
              alt="img"
              style={{ width: '100%' }} // Full width on all screen sizes
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Slider1;
