import React, { useState } from "react";

import { FaShoppingBasket, FaEye } from "react-icons/fa";

import { AiFillHeart } from "react-icons/ai";
import { BiShuffle } from "react-icons/bi";

import "./SingleProduct.css";
const SingleProduct = ({ product, checkBorder }) => {
  const [isVisible, setIsVisble] = useState(false);

  const handleIsVisible = (e) => {
    setIsVisble(!isVisible);
  };

  return (
    <>
      <div
        className=" animate__animated animate__zoomIn  product"
        onMouseEnter={() => handleIsVisible()}
        onMouseLeave={() => handleIsVisible()}
      >
        <a className="productLink" href="http://" target="_blank">
          <p className="author">{product.author}</p>
          <h4 className="bookName">{product.name}</h4>
          <div
            className={`boxBorder ${checkBorder % 5 === 0 ? "noBorder" : ""}`}
          >
            <img
              className="productImage"
              src={product.img}
              alt={product.name}
            />
            <div className="priceDiv">
              <p className="realPrice"> ${product.price}</p>
              <p className="fakePrice">${product.fakePrice}</p>
              <p className="discountPercent">-50%</p>
            </div>
          </div>
        </a>

        <div className={`hoverDiv ${isVisible ? "visible" : "hidden"}`}>
          <button className="CartBTN">
            <FaShoppingBasket />
          </button>
          <button className="wishListBTN">
            <AiFillHeart />
          </button>
          <button className="detailsBTN">
            <BiShuffle />
          </button>
          <button className="quickViewBTN">
            <FaEye />
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
