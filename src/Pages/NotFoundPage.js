import React from "react";

import pageNotFound from "../Utilities/Images/UtiltiyImages/pageNotFound.png";

import { useNavigate } from "react-router-dom";

import "./NotFoundPage.css";
const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="pageNotFoundContainer">
        <img className="notFoundImg" src={pageNotFound} alt="Not Found" />
        <h4 className="notFoundTxt">Page Not Found</h4>
        <button onClick={() => handleHomeClick()} className="homeBtn">
          Back to Home
        </button>
      </div>
    </>
  );
};

export default NotFoundPage;
