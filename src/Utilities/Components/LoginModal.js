import React, { useState } from "react";

import { useGlobalContext } from "../Context/Context";
import { useAuthContext } from "../Context/AuthContext";
import StyledTextField from "./InputComponent/StyledTextField";

import { validateLoginForm } from "../Validators/LoginValidator";

import { toast } from "react-toastify";
import axios from "axios";

import googleIcon from "../Images/Icons/googleIcon.png";
import loginImage from "../Images/UtiltiyImages/loginModalImage.png";

import "./LoginModal.css";
const LoginModal = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { storeName, openModal, closeModal, openSignUpModal } =
    useGlobalContext();

  const { loginUserVerifier, logoutUserVerifier } = useAuthContext();

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

  const hasErrors = () => {
    return Object.values(errors).some((error) => error !== "");
  };

  const loginUserHandler = async (e) => {
    e.preventDefault();

    const loginUser = {
      email: formValues.email,
      password: formValues.password,
    };

    await axios
      .post(
        `${process.env.REACT_APP_BACKEND_BASER_URL}/api/users/login`,
        loginUser
      )
      .then((response) => {
        loginUserVerifier(
          response.data.user.id,
          response.data.token,
          response.data.user
        );

        let res = "Successful: " + response.data.message;
        toast.success(res, {
          position: "top-center",
          theme: "colored",
        });

        closeModal();
      })
      .catch((error) => {
        let err =
          "Error Occurred: " +
          error.response.status +
          " " +
          error.response.data.message;
        toast.error(err, {
          position: "top-center",
          theme: "colored",
        });
      });
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
            <form onSubmit={loginUserHandler}>
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

              <button
                className="loginButton"
                type="submit"
                disabled={hasErrors()}
              >
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
