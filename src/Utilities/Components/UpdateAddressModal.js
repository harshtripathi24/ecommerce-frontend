import React, { useState } from "react";

import StyledTextField from "./InputComponent/StyledTextField";
import { Select } from "@mui/material";
import MenuItem from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import { validateAddressForm } from "../Validators/AddressValidator";
import "./UpdateAddressModal.css";
import { useGlobalContext } from "../Context/Context";
import { useAuthContext } from "../Context/AuthContext";
const UpdateAddressModal = () => {
  const [addressValues, setAddressValue] = useState({
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const { userToken, currentUser, loginAuthContext } = useAuthContext();

  const { closeModal } = useGlobalContext();

  console.log(currentUser);
  const [errors, setErrors] = useState({
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleInputChange = (e) => {
    if (currentUser) {
      const { name, value } = e.target;
      const updatedAddressValues = { ...addressValues, [name]: value };
      const errors = validateAddressForm(updatedAddressValues);

      setAddressValue(updatedAddressValues);
      setErrors(errors);
    } else {
      closeModal();
    }
  };

  const hasErrors = () => {
    return Object.values(errors).some((error) => error !== "");
  };

  const getLogin = async (uid, token) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await axios
      .get(
        `${process.env.REACT_APP_BACKEND_BASER_URL}/api/users/show-user/${uid}`,
        config
      )
      .then((response) => {
        loginAuthContext(response.data.user, token);
      })
      .catch((error) => {
        console.log(error);

        let err =
          "Error Occurred: " +
          error.response.status +
          " Error Occurred in Fetching User " +
          error.response.data.message;
        toast.error(err, {
          position: "top-center",
          theme: "colored",
        });
      });
  };

  const updateUserHandler = async (e) => {
    e.preventDefault();

    if (currentUser) {
      const updateAddress = {
        phoneNumber: addressValues.phoneNumber,
        address: addressValues.address,
        city: addressValues.city,
        state: addressValues.state,
        pincode: addressValues.pincode,
      };

      const config = {
        headers: { Authorization: `Bearer ${userToken}` },
      };

      await axios
        .patch(
          `${process.env.REACT_APP_BACKEND_BASER_URL}/api/users/update-address/${currentUser.id}`,
          updateAddress,
          config
        )
        .then((response) => {
          let res = "Successful: " + response.data.message;

          getLogin(currentUser.id, userToken);

          closeModal();

          toast.success(res, {
            position: "top-center",
            theme: "colored",
          });
        })
        .catch((error) => {
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
    } else {
      closeModal();
    }
  };

  return (
    <>
      <div className="addressModalContainer">
        <div className="updateDiv">
          <h5 className="addressModalHeading">
            Give or Update Address for Delivery of Order
          </h5>
          <form onSubmit={(e) => updateUserHandler(e)}>
            <StyledTextField
              label="Phone Number"
              type="text"
              name="phoneNumber"
              value={addressValues.phoneNumber}
              onChange={handleInputChange}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
            />
            <StyledTextField
              label="State"
              type="text"
              name="state"
              value={addressValues.state}
              onChange={handleInputChange}
              error={!!errors.state}
              helperText={errors.state}
            />
            <StyledTextField
              label="City"
              type="text"
              name="city"
              value={addressValues.city}
              onChange={handleInputChange}
              error={!!errors.city}
              helperText={errors.city}
            />
            <StyledTextField
              label="Pincode"
              type="text"
              name="pincode"
              value={addressValues.pincode}
              onChange={handleInputChange}
              error={!!errors.pincode}
              helperText={errors.pincode}
            />

            <StyledTextField
              label="Address"
              type="text"
              name="address"
              value={addressValues.address}
              onChange={handleInputChange}
              error={!!errors.address}
              helperText={errors.address}
            />

            <button
              className="loginButton"
              type="submit"
              disabled={hasErrors()}
            >
              Update Address
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateAddressModal;
