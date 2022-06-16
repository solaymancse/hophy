import React from "react";
import { PartnarSlidercard } from "../PartnarSlidercard/PartnarSlidercard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

export const PartnarSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>{<PartnarSlidercard />}</SwiperSlide>
        <SwiperSlide>{<PartnarSlidercard />}</SwiperSlide>
        <SwiperSlide>{<PartnarSlidercard />}</SwiperSlide>
        <SwiperSlide>{<PartnarSlidercard />}</SwiperSlide>
        <SwiperSlide>{<PartnarSlidercard />}</SwiperSlide>
        <SwiperSlide>{<PartnarSlidercard />}</SwiperSlide>
      </Swiper>
    </div>
  );
};
