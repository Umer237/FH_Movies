import React from "react";
import introData from "../../data/section/intro2.json";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import SwiperCore, { Navigation, Pagination, Parallax, Autoplay } from "swiper";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Split from "../Split";
import fadeWhenScroll from "../../common/fadeWhenScroll";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";

SwiperCore.use([Navigation, Pagination, Parallax, Autoplay]);

const IntroWithSlider2 = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    fadeWhenScroll();
    setTimeout(() => {
      setLoad(false);
      removeSlashFromPagination();
    }, 1000);
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <header className="slider slider-prlx">
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            speed={1000}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              type: "fraction",
              clickable: true,
              el: paginationRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.pagination.el = paginationRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                for (var i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    "data-swiper-parallax",
                    0.2 * swiper.width
                  );
                }

                swiper.params.pagination.el = paginationRef.current;

                swiper.pagination.destroy();
                swiper.pagination.init();
                swiper.pagination.update();
              });
            }}
            className="swiper-wrapper"
            slidesPerView={1}
          >
            {introData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div
                  className="bg-img valign"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  data-overlay-dark="6"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div
                          style={{ maxWidth: "800px" }}
                          className="caption dig"
                        >
                          <Split>
                            <h1>
                              {typeof slide.title === "object" ? (
                                <>
                                  <h6>{slide.title.second}</h6>
                                  <p>{slide.title.third}</p>
                                </>
                              ) : (
                                slide.title
                              )}
                            </h1>
                          </Split>
                          <div
                            className="mt-20"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              cursor: "pointer",
                            }}
                          >
                            <div
                              style={{
                                alignItems: "center",
                                border: "1px solid grey",
                                padding: "15px  18px 10px 18px",
                                borderRadius: "100%",
                                color: "white",
                              }}
                            >
                              <FaPlay />
                            </div>
                            <a href="/" className="simple-btn">
                              <span>Watch Now</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
        <div className="setone setwo">
          <div
            ref={navigationNextRef}
            className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          >
               <IoIosArrowForward />
          </div>
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          >
            <IoIosArrowBack />
          </div>
        </div>
        <div
          ref={paginationRef}
          className="swiper-pagination top botm custom-font"
        ></div>
        <div className="social-icon">
          <a href="#0">
            <FaFacebookF />
          </a>
          <a href="#0">
            <FaInstagram />
          </a>
          <a href="#0">
            <FaXTwitter />
          </a>
          <a href="#0">
            <FaPinterestP />
          </a>
        </div>
      </div>
    </header>
  );
};

export default IntroWithSlider2;
