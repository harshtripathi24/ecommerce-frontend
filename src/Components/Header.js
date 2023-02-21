import React from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";

import logo from "../Utilities/Images/header-logo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="nav-button">
        <button>
          <AiOutlineMenu />
        </button>
      </div>
      <div className="logo-div">
        <img src={logo} alt="Logo" />
      </div>
      <div className="signin-div">
        <a href="http://">
          <span>Sign in</span>
        </a>
        <br />
        or <a href="http://">Register</a>
      </div>
      <div className="cart-container">
        <AiOutlineShoppingCart className="cart" />
      </div>
    </div>
  );
};

export default Header;
