"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import EachSlide from "./EachSlide";
import useTotalOfMonth from "../lib/useTotalOfMonth";
import useTotalOfYear from "../lib/useTotalOfYear";
import useTotalOfWeek from "../lib/useTotalOfWeek";
import useBudget from "../lib/useBudget";
import useOneBudget from "../lib/useOneBudget";

export default function App() {

  const {totalMonth} = useTotalOfMonth();
  const {totalYear} = useTotalOfYear();
  const {totalWeek} = useTotalOfWeek()

  // const {budget} = useBudget();

  const {weekly, monthly, yearly} = useOneBudget()

  console.log("this is budget"+ weekly);


  return (
    <div className="z-500">
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
        style={{zIndex:"-100000px"}}
      >
        <SwiperSlide>
          <EachSlide
            slideN0="slide -1"
            cata="Weekly"
            budget={weekly}
            totalCost={totalWeek}
            persentage="70"
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachSlide
            slideN0="slide -2"
            cata="Monthly"
            budget={monthly}
            totalCost={totalMonth}
            persentage="70"
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachSlide
            slideN0="slide -3"
            cata="Yearly"
            budget={yearly}
            totalCost={totalYear}
            persentage="40"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
