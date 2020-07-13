import React from "react";
import "./menu-item/styles.scss";
//initializing MenuItem, using destructuring instead of props
const MenuItem = ({ title, imageUrl, size }) => {
  <div
    //adding the 'large' class dynamically if it is found when pulled from destructuring.
    className={`${size} menu-item`}
  >
    <div
      className="background-image"
      style={{
        //string interpolation from the destructured props that loads the image as the background instead of using an img tag
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="sustitle">Shop Now</span>
    </div>
  </div>;
};

export default MenuItem;
