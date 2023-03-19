"use client"
import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper-bundle.css";
import 'swiper/css';

import { leftArrowIcon, playIcon, rightArrowIcon } from "../../utils/icons";

function Hero() {
  return (
    <div className="lg:w-100 lg:h-5">
    <Swiper
    className="mySwiper"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation={{
        nextEl: ".image-swiper-button-next",
        prevEl: ".image-swiper-button-prev"
      }}
      grabCursor={true}
      loop={true}
      autoplay={{
          delay: 500000
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        <div className="absolute inset-y-0 left-0 z-10 flex items-center">
          <button className="image-swiper-button-prev bg-gray-500 lg:ml-52 flex justify-center items-center w-16 h-16 rounded-full shadow focus:outline-none">
            {leftArrowIcon}
          </button>
        </div>
      <SwiperSlide>
        <div className="slider-box">
            <div className="flex justify-between items-center h-full w-1/2 m-auto">
                <button className="bg-gray-800 px-16 py-8 text-center text-white rounded-full">Learn More</button>
                <button className="bg-gray-800 px-16 py-8 text-center text-white rounded-full">Enroll Now</button>
                <div className="flex items-center bg-gray-800 px-16 py-8 rounded-full relative">
                <div className="absolute left-2">{playIcon}</div>
                <button className=" text-center text-white"> Watch Video</button>
                </div>
                <button className="bg-gray-800 px-16 py-8 text-center text-white rounded-full">Join For Free</button>
            </div>
        </div>
    </SwiperSlide>
      <SwiperSlide>
      <div className="slider-box">
            <div className="flex justify-between items-center h-full w-1/2 m-auto">
                <button className="bg-gray-800 px-16 py-8 text-center text-white rounded-full">Learn More</button>
                <button className="bg-gray-800 px-16 py-8 text-center text-white rounded-full">Enroll Now</button>
                <div className="flex items-center bg-gray-800 px-16 py-8 rounded-full relative">
                <div className="absolute left-2">{playIcon}</div>
                <button className=" text-center text-white"> Watch Video</button>
                </div>
                <button className="bg-gray-800 px-16 py-8 text-center text-white rounded-full">Join For Free</button>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="slider-box">
            <div className="flex justify-between items-center h-full w-1/2 m-auto">
                <button className="bg-gray-800 px-16 py-8 text-center text-white rounded-full">Learn More</button>
                <button className="bg-gray-800 px-16 py-8 text-center text-white rounded-full">Enroll Now</button>
                <div className="flex items-center bg-gray-800 px-16 py-8 rounded-full relative">
                <div className="absolute left-2">{playIcon}</div>
                <button className=" text-center text-white"> Watch Video</button>
                </div>
                <button className="bg-gray-800 px-16 py-8 text-center text-white rounded-full">Join For Free</button>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="slider-box">
            <div className="flex justify-between items-center h-full w-1/2 m-auto">
                <button className="bg-gray-800 px-16 py-8 text-center text-white rounded-full">Learn More</button>
                <button className="bg-gray-800 px-16 py-8 text-center text-white rounded-full">Enroll Now</button>
                <div className="flex items-center bg-gray-800 px-16 py-8 rounded-full relative">
                <div className="absolute left-2">{playIcon}</div>
                <button className=" text-center text-white"> Watch Video</button>
                </div>
                <button className="bg-gray-800 px-16 py-8 text-center text-white rounded-full">Join For Free</button>
            </div>
        </div>
      </SwiperSlide>
      
      <div className="absolute inset-y-0 right-0 z-10 flex items-center">
          <button className="image-swiper-button-next image-swiper-button-next bg-gray-500 lg:mr-52  flex justify-center items-center w-16 h-16 rounded-full shadow focus:outline-none">
            {rightArrowIcon}
          </button>
        </div>
    </Swiper>
    </div>
  )
}

export default Hero
