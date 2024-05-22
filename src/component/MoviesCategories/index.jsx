import React from "react";
import SingleMovie from "../../components/Single-Movies";

const MoviesCategories = () => {
  return (
    <>
      <div className="categories-topheader">
        <h3>What’s On Now</h3>
      </div>
      <div className="categoriescontainer">
        <div className="size-container">
          <div className="image-section">
            <SingleMovie />
            
            <SingleMovie />
            <SingleMovie />
            <SingleMovie />
            <SingleMovie />
            <SingleMovie />
            <SingleMovie />
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesCategories;
