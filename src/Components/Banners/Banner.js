import React from "react";

import "./Banner.css";
const Banner = (props) => {
  return (
    <div className="banner">
      <a href={props.link}>
        <img src={props.imgLink} alt={props.imgName} />
      </a>
    </div>
  );
};

export default Banner;
