'use client'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";



// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import EachSlide from "./EachSlide";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={"1.3"}
        spaceBetween={20}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <EachSlide slideN0="slide -1"  cata="Weekly" budget='1000' totalCost="700" persentage= "70" />
        </SwiperSlide>
        <SwiperSlide>
            <EachSlide slideN0="slide -2" cata="Monthly" budget='30000' totalCost="28000" persentage= "70" />
        </SwiperSlide>
        <SwiperSlide>
            <EachSlide slideN0="slide -3" cata="Yearly" budget='360000' totalCost="280000"  persentage= "40" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
