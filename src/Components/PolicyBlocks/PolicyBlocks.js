import React from "react";

import { FaShippingFast, FaRedo, FaMoneyBillWave } from "react-icons/fa";
import { HiSupport } from "react-icons/hi";

import "./PolicyBlock.css";
const PolicyBlocks = () => {
  return (
    <div className="policy-block">
      <div className="container">
        <i className="icon">
          <FaShippingFast />
        </i>
        <div className="col">
          <h4>Free Shipping Item</h4>
          <p>Orders over $500</p>
        </div>
      </div>
      <div className="container">
        <i className="icon">
          <FaRedo />
        </i>
        <div className="col">
          <h4>Money Back Guarantee</h4>
          <p>100% money back</p>
        </div>
      </div>
      <div className="container">
        <i className="icon">
          <FaMoneyBillWave />
        </i>
        <div className="col">
          <h4>Cash On Delivery</h4>
          <p>COD Over </p>
        </div>
      </div>
      <div className="container">
        <i className="icon">
          <HiSupport />
        </i>
        <div className="col">
          <h4>Help & Support</h4>
          <p>+91-830-430-3001</p>
        </div>
      </div>
    </div>
  );
};

export default PolicyBlocks;
