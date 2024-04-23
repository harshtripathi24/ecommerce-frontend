import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Carousel from "react-elastic-carousel";
import ReactImageMagnify from "react-image-magnify";
import PriceIcon from "../Utilities/Smaller Component/PriceIcon";
// import Products from "../Components/Products/ProductData";
import axios from "axios";
import { toast } from "react-toastify";
import { AiFillStar, AiFillHeart } from "react-icons/ai";

import MoonLoader from "react-spinners/MoonLoader";

import "./ProductPage.css";
import { useGlobalContext } from "../Utilities/Context/Context";
import Reviews from "../Components/ReviewSection/Reviews";

const ProductPage = () => {
  const { pid } = useParams();

  // converting pid string to intiger;
  const productID = Number(pid);

  // let reviewCount = currentProduct.review.length;

  const [heroImage, setHeroImage] = useState([]);
  const [optionActive, setOptionActive] = useState(0);
  const [isActive, setIsActive] = useState(1);
  const [product, setProduct] = useState([]);
  const [averageStars, setAverageStars] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const { closeNav } = useGlobalContext();

  const handleSetOption = (e, index) => {
    e.preventDefault();
    setOptionActive(index);
  };

  const calCulateReviews = async (product) => {
    let tStars = 0;
    let tReviews = 0;

    if (product.Reviews.length > 0) {
      product.Reviews.map((review) => {
        tStars += review.stars;
        tReviews += 1;
      });

      let avStars = Math.round(tStars / totalReviews);

      setAverageStars(avStars);
      setTotalReviews(tReviews);
    }
  };

  const mainColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--primary-color")
    .trim();

  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  useEffect(() => {
    closeNav();
  }, []);

  useEffect(() => {
    setIsLoaded(false);

    axios
      .get(
        `${process.env.REACT_APP_BACKEND_BASER_URL}/api/products/show/${pid}`
      )

      .then((response) => {
        setProduct(response.data);

        setHeroImage(response.data.img);

        setIsLoaded(true);

        calCulateReviews(response.data);
      })
      .catch((error) => {
        setIsLoaded(false);

        let err =
          "Error Occurred: " +
          error.response.status +
          " " +
          error.response.data.message;
        toast.error(err, {
          position: "top-center",
          theme: "colored",
        });
      });

    // setProducts(tempProducts);
  }, []);

  if (!isLoaded) {
    return (
      <>
        {!isLoaded && (
          <div className="loader">
            <MoonLoader
              color={mainColor}
              loading={!isLoaded}
              size={60}
              className="loaderMain"
              width={15}
              height={100}

              // style={loaderStyle}
            />
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        <div className="productPage">
          <div className="upperDiv">
            <p className="productName">{product.name}</p>
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
                  {product.Images.map((img, index) => (
                    <img
                      key={img.id}
                      src={img.url}
                      alt="Product"
                      onClick={() => setHeroImage(img.url)}
                    />
                  ))}
                </Carousel>
              </div>
            </div>
            <div className="rightInfoDiv">
              <p className="tags">
                Tags :{product.Tags.map((t) => ` ${t.tagName} | `)}
              </p>

              <h5 className="nameAuthor">
                {product.name} - {product.author}
              </h5>
              <p className="publisher">
                Publisher <span>{product.author} Publisher</span>{" "}
              </p>
              <p className="availability">
                Availability:
                <span>{product ? "In Stock" : "Out of Stock"}</span>
              </p>
              <div className="priceDiv">
                <h6 className="realPrice">
                  <PriceIcon />
                  {product.price}
                  <span className="fakePrice">
                    <PriceIcon />
                    {product.fakePrice}
                  </span>
                </h6>
              </div>
              <div className="reviews">
                <h6 className="stars">
                  <AiFillStar
                    className={`${
                      1 <= averageStars ? "starred" : "notStarred"
                    }`}
                  />
                  <AiFillStar
                    className={`${
                      2 <= averageStars ? "starred" : "notStarred"
                    }`}
                  />

                  <AiFillStar
                    className={`${
                      3 <= averageStars ? "starred" : "notStarred"
                    }`}
                  />
                  <AiFillStar
                    className={`${
                      4 <= averageStars ? "starred" : "notStarred"
                    }`}
                  />
                  <AiFillStar
                    className={`${
                      5 <= averageStars ? "starred" : "notStarred"
                    }`}
                  />
                  <span className="reviewCount">{totalReviews} Reviews</span>
                </h6>
              </div>
              <p className="shortDesc">{product.shortDesc}</p>
              <form action="" className="buyingForm">
                <div className="optionsDiv">
                  {product.options.split("/").map((option, index) => {
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
        <div className="lowerDiv">
          <div className="infoMenu">
            <button
              className={`menuBtn ${isActive === 1 ? "active" : ""}`}
              onClick={() => setIsActive(1)}
            >
              Description
            </button>
            <button
              className={`menuBtn ${isActive === 2 ? "active" : ""}`}
              onClick={() => setIsActive(2)}
            >
              Review{" "}
            </button>
            <button
              className={`menuBtn ${isActive === 3 ? "active" : ""}`}
              onClick={() => setIsActive(3)}
            >
              More Info
            </button>
          </div>
          <div className="deviderDiv">
            <div className={`desc ${isActive === 1 ? " " : "hideDiv"}`}>
              <p>{product.longDesc}</p>
            </div>
            <div className={`reviewDiv ${isActive === 2 ? " " : "hideDiv"}`}>
              <Reviews currentProduct={product} />
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ProductPage;
