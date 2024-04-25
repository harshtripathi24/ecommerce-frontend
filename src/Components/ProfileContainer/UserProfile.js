import React from "react";

import { Dropdown, Avatar } from "rsuite";

import { useAuthContext } from "../../Utilities/Context/AuthContext";
import "./UserProfile.css";

import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";

const UserProfile = () => {
  const mainColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--primary-color")
    .trim();

  const renderToggle = (props) => (
    <Avatar {...props} className="profileIcon" color={"#335EFF"} circle />
  );

  const { currentUser, logoutUserVerifier } = useAuthContext();

  const handleSingOut = () => {
    logoutUserVerifier();
  };

  return (
    <>
      <Dropdown renderToggle={renderToggle}>
        <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
          <p>Signed in as</p>
          <strong>{currentUser.name}</strong>
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>Your Wishlist</Dropdown.Item>
        <Dropdown.Item>Update Address</Dropdown.Item>
        <Dropdown.Item>Change Password</Dropdown.Item>
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
          <p onClick={logoutUserVerifier} className="signOutLink">
            Sign out
          </p>
        </Dropdown.Item>
      </Dropdown>
    </>
  );
};

export default UserProfile;
