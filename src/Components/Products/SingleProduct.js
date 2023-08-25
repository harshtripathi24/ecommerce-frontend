import React, { useState } from "react";

import { FaShoppingBasket, FaEye } from "react-icons/fa";

import { AiFillHeart } from "react-icons/ai";
import { BiShuffle } from "react-icons/bi";

import { useGlobalContext } from "../../Utilities/Context/Context";
import PriceIcon from "../../Utilities/Smaller Component/PriceIcon";

import "./SingleProduct.css";
const SingleProduct = ({ product, checkBorder }) => {
  const [isVisible, setIsVisble] = useState(false);

  const { openModal, isQuickViewOpen, openQuickView, setProduct } =
    useGlobalContext();

  const handleIsVisible = (e) => {
    setIsVisble(!isVisible);
  };

  const handleQuickView = () => {
    setProduct(product);
    openQuickView();
    openModal();
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
              <p className="realPrice">
                <PriceIcon />
                {product.price}
              </p>
              <p className="fakePrice">
                <PriceIcon />
                {product.fakePrice}
              </p>
              <p className="discountPercent">-50%</p>
            </div>
          </div>
        </a>

        <div className={`hoverDiv ${isVisible ? "visible" : "hidden"}`}>
          <button className="CartBTN" data-tooltip-id="tool-tip-basket">
            <FaShoppingBasket />
          </button>
          <button className="wishListBTN" data-tooltip-id="tool-tip-wishList">
            <AiFillHeart />
          </button>
          <button className="detailsBTN" data-tooltip-id="tool-tip-details">
            <BiShuffle />
          </button>
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
