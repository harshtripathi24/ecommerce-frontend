import React from "react";

import publisher1 from "../../Utilities/Images/Publishers/publisher1.jpg";
import publisher2 from "../../Utilities/Images/Publishers/publisher2.jpg";
import publisher3 from "../../Utilities/Images/Publishers/publisher3.jpg";
import publisher4 from "../../Utilities/Images/Publishers/publisher4.jpg";
import publisher5 from "../../Utilities/Images/Publishers/publisher5.webp";

import "./ProductPublisherSection.css";
const ProductPublisherSection = () => {
  return (
    <div className="publisherContainer">
      <img src={publisher1} alt="publisher 1" />
      <img src={publisher2} alt="publisher-2" />
      <img src={publisher3} alt="publisher-3" />
      <img src={publisher4} alt="publisher-4" />
      <img src={publisher5} alt="publisher-5" />
    </div>
  );
};

export default ProductPublisherSection;
