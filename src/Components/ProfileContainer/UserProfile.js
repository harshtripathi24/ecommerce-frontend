import React from "react";

import { Dropdown, Avatar } from "rsuite";

import { useAuthContext } from "../../Utilities/Context/AuthContext";
import "./UserProfile.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Utilities/Context/Context";

const UserProfile = () => {
  const navigate = useNavigate();

  const { openModal, openAddressModal, openChangePasswordModal } =
    useGlobalContext();

  const mainColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--primary-color")
    .trim();

  const renderToggle = (props) => (
    <Avatar {...props} className="profileIcon" color={"#335EFF"} circle />
  );

  const { currentUser, logoutUserVerifier } = useAuthContext();

  const handleSingOut = () => {
    logoutUserVerifier();

    navigate(0);
  };

  const handleWishList = () => {
    navigate("/wishList");
  };

  const handleUpdateAddress = () => {
    openAddressModal();
    openModal();
  };

  const handleChangePassword = () => {
    openChangePasswordModal();
    openModal();
  };

  return (
    <>
      <Dropdown renderToggle={renderToggle}>
        <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
          <p>Signed in as</p>
          <strong>{currentUser.name}</strong>
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item onClick={() => handleWishList()}>
          Your Wishlist
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleUpdateAddress()}>
          Update Address
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleChangePassword()}>
          Change Password
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>
          <Link to={`${process.env.REACT_APP_BASE_URL}/FAQ`} target="_blank">
            FAQ
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link
            to={`${process.env.REACT_APP_BASE_URL}/contact_us`}
            target="_blank"
          >
            Contact Us
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <p onClick={() => handleSingOut()} className="signOutLink">
            Sign out
          </p>
        </Dropdown.Item>
      </Dropdown>
    </>
  );
};

export default UserProfile;
