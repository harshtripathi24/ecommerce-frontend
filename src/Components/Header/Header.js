import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHeadphonesAlt } from "react-icons/fa";

import Search from "./Search";
import MainNaviagtion from "../navigation/MainNaviagtion";
import DeskNav from "../navigation/DeskNav";

import logo from "../../Utilities/Images/header-logo.png";

import "./header.css";
import { useGlobalContext } from "../../Utilities/Context/Context";

const Header = () => {
  const [cartItem, setCartItem] = useState(0);
  const [windoWidth, setWindoWidth] = useState(window.innerWidth);

  const detectWindowWidth = () => {
    setWindoWidth(window.innerWidth);
  };

  const {
    openModal,
    isQuickViewOpen,
    openQuickView,
    setProduct,
    openLoginModal,
    openSignUpModal,
  } = useGlobalContext();

  const handleLoginModal = () => {
    openLoginModal();
    openModal();
  };

  const handleSinUpModal = () => {
    openSignUpModal();
    openModal();
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
          {windoWidth < 1232 ? <MainNaviagtion /> : ""}
          <div className="logo-div">
            <a
              className="homeAnchor"
              href={`${process.env.REACT_APP_BASE_URL}`}
            >
              <img src={logo} alt="Logo" />
            </a>
          </div>
        </div>

        <div className="middleHeader">
          {windoWidth > 1232 ? <Search /> : ""}
        </div>

        <div className="rightHeader">
          <div className="signin-div">
            <a onClick={() => handleLoginModal()}>
              <span>Sign in</span>
            </a>
            <br />
            or <a onClick={() => handleSinUpModal()}>Register</a>
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
