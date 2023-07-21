import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHeadphonesAlt } from "react-icons/fa";

import Search from "./Search";
import MainNaviagtion from "../navigation/MainNaviagtion";
import DeskNav from "../navigation/DeskNav";

import logo from "../../Utilities/Images/header-logo.png";

import "./header.css";

const Header = () => {
  const [cartItem, setCartItem] = useState(0);
  const [windoWidth, setWindoWidth] = useState(window.innerWidth);

  const detectWindowWidth = () => {
    setWindoWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectWindowWidth);

    return () => {
      window.removeEventListener("resize ", detectWindowWidth);
    };
  }, [windoWidth]);

  return (
    <div className="mainHeader">
      <div className="header">
        <div className="leftHeader">
          <MainNaviagtion />
          <div className="logo-div">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        <div className="middleHeader">
          {windoWidth > 1232 ? <Search /> : ""}
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
      {windoWidth < 1232 ? <Search /> : ""}

      <DeskNav />
    </div>
  );
};

export default Header;
