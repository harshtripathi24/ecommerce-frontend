import React from "react";

import StarRating from "./StarRating";

import "./WriteReviewModal.css";

const WriteReviewModal2 = () => {
  return (
    <>
      <div className="writeReviewDiv">
        <h4 className="modalTitle">Share Your Review </h4>

        <form action="" className="writeReviewForm">
          <h5 className="labelText">Rate Product Below in Stars:</h5>
          <div className="starDiv">
            <StarRating />
          </div>

          <h5 className="labelText">Write Your Review Below: </h5>
          <div className="writeText">
            <textarea name="reviewText" id="" cols="50" rows="10"></textarea>
          </div>

          <button className="submitBtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default WriteReviewModal2;
