import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Carousel from "react-elastic-carousel";
import ReactImageMagnify from "react-image-magnify";
import PriceIcon from "../Utilities/Smaller Component/PriceIcon";
import Products from "../Components/Products/ProductData";

import { AiFillStar, AiFillHeart } from "react-icons/ai";

import "./ProductPage.css";
import { useGlobalContext } from "../Utilities/Context/Context";

const ProductPage = () => {
  const { pid } = useParams();

  // converting pid string to intiger;
  const productID = Number(pid);

  let currentProduct = Products.find((product) => product.pid === productID);

  let reviewCount = currentProduct.review.length;

  const [heroImage, setHeroImage] = useState(currentProduct.imgs[0]);

  const [optionActive, setOptionActive] = useState(0);

  const { closeNav } = useGlobalContext();

  const handleSetOption = (e, index) => {
    e.preventDefault();
    setOptionActive(index);
  };

  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  console.log(currentProduct.review[0].stars);

  useEffect(() => {
    closeNav();
  }, []);

  return (
    <>
      <div className="productPage">
        <div className="upperDiv">
          <p className="productName">{currentProduct.name}</p>
        </div>
        <div className="middleDiv">
          <div className="imageDiv">
            <div className="heroImage" id="heroImage">
              <ReactImageMagnify
                className="heroImageImg"
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: heroImage,
                  },
                  largeImage: {
                    src: heroImage,
                    width: 600,
                    height: 1000,
                  },
                }}
                isHintEnabled={true}
              />
            </div>
            <div className="imageCarousel">
              <Carousel
                focusOnSelect={false}
                pagination={false}
                className="carousel"
                breakPoints={breakPoints}
              >
                {currentProduct.imgs.map((imgUrl, index) => (
                  <img
                    key={index}
                    src={imgUrl}
                    alt="imgage"
                    onClick={() => setHeroImage(imgUrl)}
                  />
                ))}
              </Carousel>
            </div>
          </div>
          <div className="rightInfoDiv">
            <p className="tags">
              Tags :{currentProduct.categoryName.map((tag) => ` ${tag} `)}
            </p>

            <h5 className="nameAuthor">
              {currentProduct.name} - {currentProduct.author}
            </h5>
            <p className="publisher">
              Publisher <span>{currentProduct.publisher}</span>{" "}
            </p>
            <p className="availability">
              Availability:
              <span>
                {currentProduct.availability ? "In Stock" : "Out of Stock"}
              </span>
            </p>
            <div className="priceDiv">
              <h6 className="realPrice">
                <PriceIcon />
                {currentProduct.price}
                <span className="fakePrice">
                  <PriceIcon />
                  {currentProduct.fakePrice}
                </span>
              </h6>
            </div>
            <div className="reviews">
              <h6 className="stars">
                <AiFillStar
                  className={`${
                    1 <= currentProduct.review[0].stars
                      ? "starred"
                      : "notStarred"
                  }`}
                />
                <AiFillStar
                  className={`${
                    2 <= currentProduct.review[0].stars
                      ? "starred"
                      : "notStarred"
                  }`}
                />
                <AiFillStar
                  className={`${
                    3 <= currentProduct.review[0].stars
                      ? "starred"
                      : "notStarred"
                  }`}
                />
                <AiFillStar
                  className={`${
                    4 <= currentProduct.review[0].stars
                      ? "starred"
                      : "notStarred"
                  }`}
                />
                <AiFillStar
                  className={`${
                    5 <= currentProduct.review[0].stars
                      ? "starred"
                      : "notStarred"
                  }`}
                />

                <span className="reviewCount">{reviewCount} Reivew</span>
              </h6>
            </div>
            <p className="shortDesc">{currentProduct.shortDesc}</p>
            <form action="" className="buyingForm">
              <div className="optionsDiv">
                {currentProduct.options.map((option, index) => {
                  return (
                    <button
                      key={index}
                      id="option"
                      onClick={(e) => handleSetOption(e, index)}
                      className={`options ${
                        optionActive === index ? "optionActive" : ""
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              <label className="label">Qty: </label>
              <input
                type="number"
                name="
              quantity"
                id="quantity"
                defaultValue={1}
              />
              <button className="addToCart">+ Add to Cart</button>
              <button className="buyNow">+ Buy Now</button>
            </form>

            <p className="addToWishList">
              <AiFillHeart />
              Add to Wish List
            </p>
          </div>
        </div>
        <div className="lowerDiv"></div>
      </div>
    </>
  );
};

export default ProductPage;
