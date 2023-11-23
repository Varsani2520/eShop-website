"use client";
import React from "react";
import { Grid } from "@mui/material";
import Container from "@mui/material/Container/Container";
import Divider1 from "./components/Divider1.jsx";
import Slider1 from "./components/Slider1";
import Divider2 from "./components/Divider2";
import HomeCard from "./components/HomeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
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
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img src="https://media.istockphoto.com/id/1425540760/photo/young-woman-choosing-clothes-in-wardrobe-closet-back-view.jpg?s=612x612&w=0&k=20&c=FU5_CX985u7URA86hziqh8BW7u6SiV_WfVrXbEWZ2tw=" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://media.istockphoto.com/id/931577634/photo/soft-focus-of-a-two-years-old-child-choosing-her-own-dresses-from-kids-cloth-rack.jpg?s=612x612&w=0&k=20&c=VYPxAfk5AODBbX6DW5RTZ1v3R2PD4H2-1e9fa9OAcM0=" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://media.istockphoto.com/id/1131600024/photo/women-buying-earring-at-street-market.jpg?s=612x612&w=0&k=20&c=WBzRRkzmpwMwxH3TIiNCZGMcMe00QwNWiFzo3b5WCvE=" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://media.istockphoto.com/id/1480208626/photo/childrens-room-interior-with-table-cute-paintings.jpg?s=612x612&w=0&k=20&c=HQo5rKhYAPeXWzYMa3FLOIUC8d9UHFkEA3270U1dE30=" />
            </SwiperSlide>
            ...
          </Swiper>
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
