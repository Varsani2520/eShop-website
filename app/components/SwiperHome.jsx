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

const SwiperHome = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 1000 }}
        pagination={{ clickable: true }}
        style={{ position: "relative" }}
      >
        <SwiperSlide>
          <img
            src={imageF.src}
            alt="eshop-image"
            style={{ width: "inherit" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imagesecond.src}
            style={{ width: "inherit" }}
            alt="eshop-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imagethird.src}
            style={{ width: "inherit" }}
            alt="eshop-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={imagefourth.src}
            style={{ width: "inherit" }}
            alt="eshop-image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperHome;
