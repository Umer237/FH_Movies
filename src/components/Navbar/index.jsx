/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import appData from "../../data/app.json";
import {
  handleDropdown,
  handleMobileDropdown,
  handleSearch,
} from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <a href="/" className="logo">
          {theme ? (
            theme === "themeL" ? (
              <img ref={lr} src={`${appData.darkLogo}`} alt="logo" />
            ) : (
              <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
            )
          ) : (
            <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
          )}
        </a>
        <div className="Search-Bar-Nav">
          <input
            className="search-input"
            type="text"
            placeholder="Find Movies & TV"
          />
          <IoIosSearch />
        </div>
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Live TV</a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link">Sign in</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
