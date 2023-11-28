import React from "react";

import { AiFillStar } from "react-icons/ai";
import "./ReviewStars.css";
const ReviewStars = ({ showStar }) => {
  return (
    <>
      <AiFillStar className={`${1 <= showStar ? "starred" : "notStarred"}`} />
      <AiFillStar className={`${2 <= showStar ? "starred" : "notStarred"}`} />
      <AiFillStar className={`${3 <= showStar ? "starred" : "notStarred"}`} />
      <AiFillStar className={`${4 <= showStar ? "starred" : "notStarred"}`} />
      <AiFillStar className={`${5 <= showStar ? "starred" : "notStarred"}`} />
    </>
  );
};

export default ReviewStars;
