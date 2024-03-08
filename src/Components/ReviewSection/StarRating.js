import React, { useState } from "react";

import { AiFillStar } from "react-icons/ai";

import "./StarRating.css";
const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="starRating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="starSpan">
              <AiFillStar className="star" />
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
