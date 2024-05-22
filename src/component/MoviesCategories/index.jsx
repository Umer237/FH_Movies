import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SingleMovie from "../../components/Single-Movies";
import "swiper/css";
import "swiper/css/pagination";
import bannerimg, { bannerimgs } from "../../../public/data/bannerimg";

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
          {bannerimgs.map((items) => (

            <SwiperSlide>
              <img
                src={items.img}
                alt=""
              />
            </SwiperSlide>

          ))}

        </Swiper>
      </div>
    </>
  );
};

export default MoviesCategories;
