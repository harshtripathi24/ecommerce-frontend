import React, { useState } from "react";

import { useGlobalContext } from "../Context/Context";
import StyledTextField from "./InputComponent/StyledTextField";
import { validateSignUpForm } from "../Validators/SignUpFormValidator";

import { toast } from "react-toastify";
import axios from "axios";

import googleIcon from "../Images/Icons/googleIcon.png";
import loginImage from "../Images/UtiltiyImages/loginModalImage.png";

const SignUpModal = () => {
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

  const { closeSignUpModel, openLoginModal } = useGlobalContext();

  const hasErrors = () => {
    return Object.values(errors).some((error) => error !== "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormValues = { ...formValues, [name]: value };
    const errors = validateSignUpForm(updatedFormValues);

    setFormValues(updatedFormValues);
    setErrors(errors);
  };

  const registerUserHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
    };

    await axios
      .post(
        `${process.env.REACT_APP_BACKEND_BASER_URL}/api/users/signup`,
        newUser
      )
      .then((response) => {
        let res =
          "Successful: " + response.data.message + " Now You Can Sign In";
        toast.success(res, {
          position: "top-center",
          theme: "colored",
        });

        openLoginModal();
        closeSignUpModel();
      })
      .catch((error) => {
        console.log("Error Below");
        console.log(error);

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
              Register and Get access to your Orders, Wishlist and
              Recommendations.
            </h5>
            <form onSubmit={registerUserHandler}>
              <StyledTextField
                label="Name"
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                error={!!errors.name}
                helperText={errors.name}
              />
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
              <StyledTextField
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleInputChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
              />
              {console.log(errors.confirmPassword)}
              {console.log(!!errors.confirmPassword)}
              <button
                className="loginButton"
                type="submit"
                disabled={hasErrors()}
              >
                Register
              </button>
            </form>

            <p className="orOption">Or </p>

            <button className="googleButton" type="button">
              <img src={googleIcon} alt="Google  Icon" className="googleIcon" />
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpModal;
