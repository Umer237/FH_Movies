import React from "react";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="Nav-Main">
      <div className="nav-logo">
        <div className="logo-side-flex">
          <img src="https://www.fhgroupoc.com/svg/fhlogow.svg" alt="" />
          <div className="search-flex">
            <input type="text" placeholder="Find Movies & TV" />
            <IoIosSearch className="i-nav" />
          </div>
          <h6>Home</h6>
          <h6>Live TV</h6>
          <button>On Demand</button>
        </div>
      </div>
      <div>
        <h6>Sign</h6>
      </div>
    </div>
  );
};

export default Navbar;
