"use client"
import React from 'react'// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper-bundle.css";
import 'swiper/css';
import { leftArrowIcon, rightArrowIcon } from '../../utils/icons';
import TCard from '../../ui-components/TCard';


function Testimonial() {
  return (
    <div className='px-5'>
      <h1 className='text-center text-black font-semibold text-5xl'>Testimonial</h1>

    <div className='mt-10 m-auto'>
        <Swiper
        className="mySwiper"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={3}
        navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev"
        }}
        grabCursor={true}
        autoplay={{
            delay: 500000
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
        <div className="absolute inset-y-0 left-0 z-10 flex items-center">
          <button className="image-swiper-button-prev bg-gray-500 lg:ml-28 flex justify-center items-center w-16 h-16 rounded-full shadow focus:outline-none">
            {leftArrowIcon}
          </button>
        </div>

        <div className='w-4/5 m-auto overflow-hidden'>
            <SwiperSlide>
                <TCard />
            </SwiperSlide>
            <SwiperSlide>
                <TCard />
            </SwiperSlide>
            <SwiperSlide>
                <TCard />
            </SwiperSlide>
            <SwiperSlide>
                <TCard />
            </SwiperSlide>
            <SwiperSlide>
                <TCard />
            </SwiperSlide>
            <SwiperSlide>
                <TCard />
            </SwiperSlide>
        </div>

        <div className="absolute inset-y-0 right-0 z-10 flex items-center">
          <button className="image-swiper-button-next image-swiper-button-next bg-gray-500 lg:mr-28  flex justify-center items-center w-16 h-16 rounded-full shadow focus:outline-none">
            {rightArrowIcon}
          </button>
        </div>
        </Swiper>
    </div>

    </div>
  )
}

export default Testimonial;
