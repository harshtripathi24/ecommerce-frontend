import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHeadphonesAlt } from "react-icons/fa";

import Search from "./Search";
import MainNaviagtion from "./navigation/MainNaviagtion";

import logo from "../Utilities/Images/header-logo.png";

import "./header.css";

const Header = () => {
  const [cartItem, setCartItem] = useState(0);

  return (
    <div className="mainHeader">
      <div className="header">
        <div className="leftHeader">
          <MainNaviagtion />
          <div className="logo-div">
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div className="rightHeader">
          <div className="signin-div">
            <a href="http://">
              <span>Sign in</span>
            </a>
            <br />
            or <a href="http://">Register</a>
          </div>
          <div className="cart-container">
            <AiOutlineShoppingCart className="cart" />

            <span className="cartItems-total">{cartItem}</span>
          </div>
        </div>
      </div>
      <Search />
      <div className="customerSupport">
        <FaHeadphonesAlt className="support-icon" />
        <div className="support-text">
          <span className="support">Free Support 24x7</span>
          <p className="support-number">+91-830-430-3001</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
