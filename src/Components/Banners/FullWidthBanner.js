import React from "react";

import "./FullWidthBanner.css";
const FullWidthBanner = (props) => {
  return (
    <div className="fullWidthBanner">
      <a href={props.link}>
        <img src={props.imgLink} alt={props.imgName} />
      </a>
    </div>
  );
};

export default FullWidthBanner;
