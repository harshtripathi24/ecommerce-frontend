import React from "react";

import { useGlobalContext } from "../Context/Context";
import { StyledTextField } from "./InputComponent/StyledTextField";
import googleIocn from "../Images/Icons/googleIcon.png";
import loginImage from "../Images/UtiltiyImages/loginModalImage.png";

const SignUpModal = () => {
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
              Register and Get access to your Orders, Wishlist and
              Recommendations.
            </h5>
            <form action="" method="post">
              <StyledTextField label="Email" type="email" />
              <StyledTextField label="Password" type="password" />
              <StyledTextField label="Confirm Password" type="password" />

              <button className="loginButton" type="submit">
                Register
              </button>
            </form>

            <p>Or </p>

            <button className="googleButton" type="button">
              <img src={googleIocn} alt="Google  Icon" className="googleIcon" />
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpModal;
