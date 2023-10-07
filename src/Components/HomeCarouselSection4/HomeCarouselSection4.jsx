import React, { useRef, useState } from "react";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";

import './HomeCarouselSection4.css'

import image from "../../assets/homepage-3.jpg";

const HomeCarouselSection4 = () => {
  return (
    <>
      <div className="mt-2.5 ml-5 mr-5 flex justify-center align-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Navigation]}
          className="w-full h-full"
        >
        <SwiperSlide className="flex justify-center align-center">
            <div>
              <img className="block w-full h-full object-cover" src={image} alt="" />
            </div>
          </SwiperSlide>
        <SwiperSlide className="flex justify-center align-center">
            <div>
              <img className="block w-full h-full object-cover" src={image} alt="" />
            </div>
          </SwiperSlide>
        <SwiperSlide className="flex justify-center align-center">
            <div>
              <img className="block w-full h-full object-cover" src={image} alt="" />
            </div>
          </SwiperSlide>
        <SwiperSlide className="flex justify-center align-center">
            <div>
              <img className="block w-full h-full object-cover" src={image} alt="" />
            </div>
          </SwiperSlide>
        <SwiperSlide className="flex justify-center align-center">
            <div>
              <img className="block w-full h-full object-cover" src={image} alt="" />
            </div>
          </SwiperSlide>
        <SwiperSlide className="flex justify-center align-center">
            <div>
              <img className="block w-full h-full object-cover" src={image} alt="" />
            </div>
          </SwiperSlide>
        <SwiperSlide className="flex justify-center align-center">
            <div>
              <img className="block w-full h-full object-cover" src={image} alt="" />
            </div>
          </SwiperSlide>
        <SwiperSlide className="flex justify-center align-center">
            <div>
              <img className="block w-full h-full object-cover" src={image} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HomeCarouselSection4;
