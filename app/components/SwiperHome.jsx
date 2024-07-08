import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import imageF from "../images/imageF.jpg";
import imagesecond from "../images/imagesecond.jpg";
import imagethird from "../images/imagethird.jpg";
import imagefourth from "../images/imagefourth.jpg";
import { Container } from "@mui/material";

const SwiperHome = () => {
  const imageStyle = { width: "100%", maxHeight: "500px" };

  return (
    <Container sx={{ marginTop: "100px" }}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={true}
        delay={1000}
        // pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={imageF.src} alt="eshop-image" style={imageStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagesecond.src} style={imageStyle} alt="eshop-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagethird.src} style={imageStyle} alt="eshop-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagefourth.src} style={imageStyle} alt="eshop-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagefifth.src} style={imageStyle} alt="eshop-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagesixth.src} style={imageStyle} alt="eshop-image" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default SwiperHome;
