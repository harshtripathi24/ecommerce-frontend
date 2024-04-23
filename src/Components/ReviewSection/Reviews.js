import React from "react";

import { HiOutlinePencilSquare } from "react-icons/hi2";

import { useGlobalContext } from "../../Utilities/Context/Context";

import "./Reviews.css";
import ReviewStars from "./ReviewStars";
const Reviews = ({ currentProduct }) => {
  let totalStar = 0;
  let totalReview = 0;

  currentProduct.Reviews.map((rev) => {
    totalStar += rev.stars;
    totalReview += 1;
  });

  let averageStar = Math.round(totalStar / totalReview);

  const { openReviewModal, openModal } = useGlobalContext();

  const handleWriteReview = () => {
    console.log("WriteReview Clicked");
    openReviewModal();
    openModal();
  };

  console.log("Product From Review below ");
  console.log(currentProduct);

  console.log(averageStar);

  return (
    <>
      <div className="reviews">
        <div className="reviewHeader">
          <div className="allReview">
            <h4>Customer Reviews</h4>
            <div className="stars">
              <ReviewStars showStar={averageStar} />
            </div>
            <div className="basedOn">
              <h5>Based on {totalReview} Reviews</h5>
            </div>
          </div>
          <button className="writeReview" onClick={() => handleWriteReview()}>
            <HiOutlinePencilSquare /> Write a review
          </button>
        </div>
        <div className="reviewList">
          {currentProduct.Reviews.map((rev) => {
            return (
              <div className="singleReview">
                <div className="titleDiv">
                  <div className="userName">
                    {rev.userName} <ReviewStars showStar={rev.stars} />{" "}
                  </div>
                  <div className="starsDiv"></div>
                </div>
                <div className="reviewText">{rev.reviewText}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Reviews;
