"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
            src="https://media.istockphoto.com/id/1425540760/photo/young-woman-choosing-clothes-in-wardrobe-closet-back-view.jpg?s=612x612&w=0&k=20&c=FU5_CX985u7URA86hziqh8BW7u6SiV_WfVrXbEWZ2tw="
            alt="eshop-image"
            style={{ width: "inherit" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/931577634/photo/soft-focus-of-a-two-years-old-child-choosing-her-own-dresses-from-kids-cloth-rack.jpg?s=612x612&w=0&k=20&c=VYPxAfk5AODBbX6DW5RTZ1v3R2PD4H2-1e9fa9OAcM0="
            style={{ width: "inherit" }}
            alt="eshop-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1131600024/photo/women-buying-earring-at-street-market.jpg?s=612x612&w=0&k=20&c=WBzRRkzmpwMwxH3TIiNCZGMcMe00QwNWiFzo3b5WCvE="
            style={{ width: "inherit" }}
            alt="eshop-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1480208626/photo/childrens-room-interior-with-table-cute-paintings.jpg?s=612x612&w=0&k=20&c=HQo5rKhYAPeXWzYMa3FLOIUC8d9UHFkEA3270U1dE30="
            style={{ width: "inherit" }}
            alt="eshop-image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperHome;
