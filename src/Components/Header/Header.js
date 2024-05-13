import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHeadphonesAlt } from "react-icons/fa";

import Search from "./Search";
import MainNaviagtion from "../navigation/MainNaviagtion";
import DeskNav from "../navigation/DeskNav";
import { useAuthContext } from "../../Utilities/Context/AuthContext";

import logo from "../../Utilities/Images/header-logo.png";
import { toast } from "react-toastify";
import axios from "axios";
import "./header.css";
import { useGlobalContext } from "../../Utilities/Context/Context";
import { useNavigate } from "react-router-dom";
import UserProfile from "../ProfileContainer/UserProfile";

const Header = () => {
  const [cartItem, setCartItem] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const detectWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  const { openModal, openLoginModal, openSignUpModal } = useGlobalContext();

  const { userToken, currentUser } = useAuthContext();

  const handleLoginModal = () => {
    openLoginModal();
    openModal();
  };

  const handleSinUpModal = () => {
    openSignUpModal();
    openModal();
  };

  const handleCart = () => {
    if (userToken) {
      navigate("/cart");
    } else {
      handleLoginModal();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", detectWindowWidth);

    return () => {
      window.removeEventListener("resize ", detectWindowWidth);
    };
  }, [windowWidth]);

  useEffect(() => {
    if (userToken) {
      setCartItem(currentUser.CartLists.length);
    } else {
      setCartItem(0);
    }
  }, [userToken, currentUser]);

  return (
    <div className="mainHeader">
      <div className="header">
        <div className="leftHeader">
          {windowWidth < 1232 ? <MainNaviagtion /> : ""}
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
          {windowWidth > 1232 ? <Search /> : ""}
        </div>

        <div className="rightHeader">
          {!userToken && (
            <>
              <div className="signin-div">
                <a onClick={() => handleLoginModal()}>
                  <span>Sign in</span>
                </a>
                <br />
                or <a onClick={() => handleSinUpModal()}>Register</a>
              </div>
            </>
          )}

          {userToken && (
            <div className="profileDiv">
              <UserProfile />
            </div>
          )}

          <div onClick={() => handleCart()} className="cart-container">
            <AiOutlineShoppingCart className="cart" />

            <span className="cartItems-total">{cartItem}</span>
          </div>
        </div>
      </div>
      {windowWidth < 1232 ? <Search /> : ""}

      <DeskNav />
    </div>
  );
};

export default Header;
