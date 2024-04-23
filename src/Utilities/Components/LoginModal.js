import React, { useState } from "react";

import { useGlobalContext } from "../Context/Context";
import StyledTextField from "./InputComponent/StyledTextField";

import { validateLoginForm } from "../Validators/LoginValidator";

import googleIcon from "../Images/Icons/googleIcon.png";
import loginImage from "../Images/UtiltiyImages/loginModalImage.png";

import "./LoginModal.css";
const LoginModal = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { storeName, openModal, openSignUpModal } = useGlobalContext();

  const handleSinUpModal = () => {
    openSignUpModal();
    openModal();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormValues = { ...formValues, [name]: value };
    const errors = validateLoginForm(updatedFormValues);

    setFormValues(updatedFormValues);
    setErrors(errors);
  };

  return (
    <>
      <div className="loginModal">
        <div className="leftDiv">
          <img src={loginImage} alt="Login Image" />
        </div>
        <div className="rightDiv">
          <div className="loginDiv">
            <h5 className="LoginModalHeading">
              Login and Get access to your Orders, Wishlist and Recommendations.
            </h5>
            <form action="" method="post">
              <StyledTextField
                label="Email"
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
              />
              <StyledTextField
                label="Password"
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleInputChange}
                error={!!errors.password}
                helperText={errors.password}
              />

              <button className="loginButton" type="submit">
                Login
              </button>
            </form>

            <p className="orOption">Or </p>

            <button className="googleButton" type="button">
              <img src={googleIcon} alt="Google  Icon" className="googleIcon" />
              Login with Google
            </button>
          </div>
          <div className="signUpDiv">
            <a onClick={() => handleSinUpModal()}>
              New to <span className="storeName"> {storeName} </span>? Create an
              Account
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
