/* eslint-disable @next/next/no-css-tags */
import React ,{useEffect} from "react";
import Head from "next/head";

const LightTheme = ({ children, bdOn }) => {
  useEffect(() => {
      if (bdOn) {
      document.querySelector("body").classList.add("bd-dark");
      return () => {
        document.querySelector("body").classList.remove("bd-dark");
      };
    }
    });
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/light.css" />
      </Head>
      {children}
    </>
  );
};

export default LightTheme;
