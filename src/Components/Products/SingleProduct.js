import React, { useState } from "react";

import { FaShoppingBasket, FaEye } from "react-icons/fa";
import { calculatePercentageOff } from "../../Utilities/Calculation/PercentOff";
import { AiFillHeart } from "react-icons/ai";
import { BiShuffle } from "react-icons/bi";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../Utilities/Context/Context";
import PriceIcon from "../../Utilities/Smaller Component/PriceIcon";
import { BiSolidStar } from "react-icons/bi";

import "./SingleProduct.css";
const SingleProduct = ({ product, checkBorder }) => {
  const [isVisible, setIsVisble] = useState(false);

  const percentOff = calculatePercentageOff(product.fakePrice, product.price);

  const {
    openModal,
    isQuickViewOpen,
    openQuickView,
    setProduct,
    openLoginModal,
  } = useGlobalContext();

  const handleIsVisible = (e) => {
    setIsVisble(!isVisible);
  };

  const handleQuickView = () => {
    setProduct(product);
    openQuickView();
    openModal();
  };

  const handleLoginModal = () => {
    openLoginModal();
    openModal();
  };

  return (
    <>
      <div
        className=" animate__animated animate__zoomIn  product"
        onMouseEnter={() => handleIsVisible()}
        onMouseLeave={() => handleIsVisible()}
      >
        <Link
          className="productLink"
          to={`${process.env.REACT_APP_BASE_URL}/product/${product.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
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
              <p className="realPrice">
                <PriceIcon />
                {product.price}
              </p>
              <p className="fakePrice">
                <PriceIcon />
                {product.fakePrice}
              </p>
              <p className="discountPercent">-{percentOff}%</p>
            </div>
          </div>
        </Link>

        <div className={`hoverDiv ${isVisible ? "visible" : "hidden"}`}>
          <button
            className="CartBTN"
            data-tooltip-id="tool-tip-basket"
            onClick={() => handleLoginModal()}
          >
            <FaShoppingBasket />
          </button>
          <button
            className="wishListBTN"
            data-tooltip-id="tool-tip-wishList"
            onClick={() => handleLoginModal()}
          >
            <AiFillHeart />
          </button>

          <Link
            to={`${process.env.REACT_APP_BASE_URL}/product/${product.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="detailsBTN" data-tooltip-id="tool-tip-details">
              <BiShuffle />
            </button>
          </Link>

          <button
            className="quickViewBTN"
            data-tooltip-id="tool-tip-quickView"
            onClick={() => handleQuickView()}
          >
            <FaEye />
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
