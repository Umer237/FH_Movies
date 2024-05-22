import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SingleMovie from "../../components/Single-Movies";
import "swiper/css";
import "swiper/css/pagination";

const MoviesCategories = () => {
  return (
    <>
      <div className="categoriescontainer">
        <Swiper
          slidesPerView={7}
          spaceBetween={10}
          autoplay={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://i.pinimg.com/564x/c3/fb/a2/c3fba241dbbb2ff9e256412a25033895.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.pinimg.com/564x/c1/6a/bd/c16abd9ab16a8fce6633ee769257cdae.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.pinimg.com/564x/3d/6a/c4/3d6ac41ff08858e92faa1bec04a0d58b.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.pinimg.com/564x/8e/20/0f/8e200fd27609c059db426ea201ac7950.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.pinimg.com/564x/eb/7e/f7/eb7ef72a19eb7f2f0351a09c5950e5a7.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.pinimg.com/564x/ec/1a/2d/ec1a2de7dac2deab8245746da775c7b8.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.pinimg.com/564x/4a/60/06/4a6006d87ed676e35ff4966e2d9adc6d.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MoviesCategories;
