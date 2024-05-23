import React, { useRef, useState } from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SingleMovie from "../../components/Single-Movies";
import "swiper/css";
import "swiper/css/pagination";
import { bannerimgs } from "../../../public/data/bannerimg";

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
              slidesPerView: 2,
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
              <div className="wrapper">
                <div className="image">
                  <img className="movies-thumb" src={items.img} alt="" />
                  <div className="content">
                    <h5>{items.title}</h5>
                    <p>{items.desc}</p>
                    <div className="thumb-i">
                      <a href={items.linkf}>
                        <FaFacebookF />
                      </a>
                      <a href={items.linkin}>
                        <FaInstagram />
                      </a>
                      <a href={items.linktwi}>
                        <FaXTwitter />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default MoviesCategories;
