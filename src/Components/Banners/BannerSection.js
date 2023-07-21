import React from "react";

import "./BannerSection.css";
const BannerSection = (props) => {
  return <div className="banner-container">{props.children}</div>;
};

export default BannerSection;
