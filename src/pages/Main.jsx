import React from "react";
import DarkTheme from "../layouts/Dark";
import Navbar from "../components/Navbar";
import HomeBanner from "../component/Home-Banner";
import IntroWithSlider2 from "../components/Intro-with-slider2";
import MoviesCategories from "../component/MoviesCategories";
import VideoPlayer from "../component/VideoPlayer";

const FH = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <>
      <DarkTheme>
        <Navbar nr={navbarRef} lr={logoRef} />
        <IntroWithSlider2 />
        <MoviesCategories />
        {/* <MoviesCategories />
        <MoviesCategories />
        <MoviesCategories /> */}
        <VideoPlayer />
      </DarkTheme>
    </>
  );
};

export default FH;
