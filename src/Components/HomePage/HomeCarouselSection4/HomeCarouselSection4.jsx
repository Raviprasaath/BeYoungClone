import React, { useRef, useState } from "react";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";

import { useScreenSize } from "../../CommonFunctions/CommonFunctions";

import "./HomeCarouselSection4.css";

import img1 from "../../../assets/home-carousel-1/image-1.jpg";
import img2 from "../../../assets/home-carousel-1/image-2.jpg";
import img3 from "../../../assets/home-carousel-1/image-3.jpg";
import img4 from "../../../assets/home-carousel-1/image-4.jpg";
import img5 from "../../../assets/home-carousel-1/image-5.jpg";
import img6 from "../../../assets/home-carousel-1/image-6.jpg";
import img7 from "../../../assets/home-carousel-1/image-7.jpg";

const HomeCarouselSection4 = () => {
  const screenSize = useScreenSize();
  const isMobile = screenSize < 960;

  return (
    <>
      {!isMobile && (
        <div className="flex justify-center items-center my-2.5">
          <div className="w-[76.2%] flex flex-col justify-center ">
            <h2 className="text-[20px] font-bold py-3.5">BIG SAVING ZONE</h2>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              navigation={true}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              modules={[Pagination, Navigation]}
              className="w-full h-full"
            >
              <SwiperSlide className="flex justify-center align-center">
                <div>
                  <img
                    className="block w-full h-full object-cover"
                    src={img1}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center align-center">
                <div>
                  <img
                    className="block w-full h-full object-cover"
                    src={img2}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center align-center">
                <div>
                  <img
                    className="block w-full h-full object-cover"
                    src={img3}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center align-center">
                <div>
                  <img
                    className="block w-full h-full object-cover"
                    src={img4}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center align-center">
                <div>
                  <img
                    className="block w-full h-full object-cover"
                    src={img5}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center align-center">
                <div>
                  <img
                    className="block w-full h-full object-cover"
                    src={img6}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex justify-center align-center">
                <div>
                  <img
                    className="block w-full h-full object-cover"
                    src={img7}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="flex justify-center items-center my-2.5">
          <div className="w-[76.2%] flex flex-col justify-center ">
            <h2 className="font-bold py-3.5">BIG SAVING ZONE</h2>
            <div className="flex flex-nowrap gap-3 overflow-x-scroll overflow-y-hidden whitespace-nowrap">
              <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <img className=" w-[200px]" src={img1} alt="" />
              </div>
              <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <img className=" w-[200px]" src={img2} alt="" />
              </div>
              <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <img className=" w-[200px]" src={img3} alt="" />
              </div>
              <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <img className=" w-[200px]" src={img4} alt="" />
              </div>
              <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <img className=" w-[200px]" src={img5} alt="" />
              </div>
              <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <img className=" w-[200px]" src={img6} alt="" />
              </div>
              <div className="relative inline-block flex-grow-0 flex-shrink-0 flex-auto">
                <img className=" w-[200px]" src={img7} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeCarouselSection4;
