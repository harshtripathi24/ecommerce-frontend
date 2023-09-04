import React, { useEffect } from "react";

import { useGlobalContext } from "../Context/Context";
import { StyledTextField } from "./InputComponent/StyledTextField";
import googleIocn from "../Images/Icons/googleIcon.png";
import loginImage from "../Images/UtiltiyImages/loginModalImage.png";

import "./LoginModal.css";
const LoginModal = () => {
  const { storeName } = useGlobalContext();

  return (
    <>
      <div className="loginModal">
        <div className="leftDiv">
          <img src={loginImage} alt="Login Image" />
        </div>
        <div className="rightDiv">
          <div className="loginDiv">
            <h5 className="LoginModalHeading">
              Login and get access Get access to your Orders, Wishlist and
              Recommendations
            </h5>
            <form action="" method="post">
              <StyledTextField label="Email" type="email" />
              <StyledTextField label="Password" type="password" />

              <button className="loginButton" type="submit">
                Login
              </button>
            </form>

            <p>Or </p>

            <button className="googleButton" type="button">
              <img src={googleIocn} alt="Google  Icon" className="googleIcon" />
              Login with Google
            </button>
          </div>
          <div className="signUpDiv">
            <a href="http://">
              New to <span> {storeName} </span>? Create an Account
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
