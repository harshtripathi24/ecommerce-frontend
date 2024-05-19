import React, { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import { useGlobalContext } from "../Context/Context";
import axios from "axios";
import { toast } from "react-toastify";
import StyledTextField from "./InputComponent/StyledTextField";
import { validatePasswordChangeForm } from "../Validators/ChangePasswordValidator";

const ChangePasswordModal = () => {
  const [passwordValues, setPasswordValue] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const { userToken, currentUser, loginAuthContext } = useAuthContext();

  const { closeModal } = useGlobalContext();

  console.log(currentUser);
  const [errors, setErrors] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    if (currentUser) {
      const { name, value } = e.target;
      const updatedAddressValues = { ...passwordValues, [name]: value };
      const errors = validatePasswordChangeForm(updatedAddressValues);

      setPasswordValue(updatedAddressValues);
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

  const updatePasswordHandler = async (e) => {
    e.preventDefault();

    if (currentUser) {
      const updatePassword = {
        oldPassword: passwordValues.oldPassword,
        newPassword: passwordValues.confirmPassword,
      };

      const config = {
        headers: { Authorization: `Bearer ${userToken}` },
      };

      await axios
        .patch(
          `${process.env.REACT_APP_BACKEND_BASER_URL}/api/users/update-password/${currentUser.id}`,
          updatePassword,
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
          <h5 className="addressModalHeading">Change Your Password</h5>
          <form onSubmit={(e) => updatePasswordHandler(e)}>
            <StyledTextField
              label="Old Password"
              type="password"
              name="oldPassword"
              value={passwordValues.oldPassword}
              onChange={handleInputChange}
              error={!!errors.oldPassword}
              helperText={errors.oldPassword}
            />
            <StyledTextField
              label="New Password"
              type="password"
              name="newPassword"
              value={passwordValues.newPassword}
              onChange={handleInputChange}
              error={!!errors.newPassword}
              helperText={errors.newPassword}
            />
            <StyledTextField
              label="Confirm New Password"
              type="password"
              name="confirmPassword"
              value={passwordValues.confirmPassword}
              onChange={handleInputChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />

            <button
              className="loginButton"
              type="submit"
              disabled={hasErrors()}
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePasswordModal;
