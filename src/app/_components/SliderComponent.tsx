import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import HeroSection from "./HeroSection";

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
          
        }}

        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="h-full w-full "
      >
        <SwiperSlide>
          <HeroSection imgNum="5" />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSection imgNum="16" />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSection imgNum="17" imgPos="bg-bottom" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
