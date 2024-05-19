import React, { useState } from "react";

import { FaShoppingBasket, FaEye } from "react-icons/fa";
import { calculatePercentageOff } from "../../Utilities/Calculation/PercentOff";
import { AiFillHeart } from "react-icons/ai";
import { BiShuffle } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { useGlobalContext } from "../../Utilities/Context/Context";
import PriceIcon from "../../Utilities/Smaller Component/PriceIcon";
import { BiSolidStar } from "react-icons/bi";
import { useAuthContext } from "../../Utilities/Context/AuthContext";

import "./SingleProduct.css";
const SingleProduct = ({ product, checkBorder }) => {
  const [isVisible, setIsVisble] = useState(false);

  const percentOff = calculatePercentageOff(product.fakePrice, product.price);

  const { userToken, currentUser, loginAuthContext } = useAuthContext();

  const {
    openModal,
    isQuickViewOpen,
    openQuickView,
    setProduct,
    openLoginModal,
  } = useGlobalContext();

  const defaultOption = product.options.split("/")[0];

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

  const getLogin = async (uid, token) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await axios
      .get(
        `${process.env.REACT_APP_BACKEND_BASER_URL}/api/users/show-user/${uid}`,
        config
      )
      .then((response) => {
        loginAuthContext(response.data.user, token);
      })
      .catch((error) => {
        console.log(error);

        let err =
          "Error Occurred: " +
          error.response.status +
          " Error Occurred in Fetching User " +
          error.response.data.message;
        toast.error(err, {
          position: "top-center",
          theme: "colored",
        });
      });
  };

  const handleAddToCart = async () => {
    if (userToken) {
      const config = {
        headers: { Authorization: `Bearer ${userToken}` },
      };

      const bodyParameters = {
        pid: product.id,
        uid: currentUser.id,
        quantity: 1,
        optionChosen: defaultOption,
      };

      await axios
        .post(
          `${process.env.REACT_APP_BACKEND_BASER_URL}/api/cartList/add-item`,
          bodyParameters,
          config
        )
        .then((response) => {
          getLogin(currentUser.id, userToken);

          let res = "Successful: " + response.data.message;
          toast.success(res, {
            position: "top-center",
            theme: "colored",
          });
        })
        .catch((error) => {
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
    } else {
      handleLoginModal();
    }
  };

  const handleAddToWishlist = async () => {
    if (userToken) {
      const config = {
        headers: { Authorization: `Bearer ${userToken}` },
      };

      const bodyParameters = {
        pid: product.id,
        uid: currentUser.id,
        quantity: 1,
        optionChosen: defaultOption,
      };

      await axios
        .post(
          `${process.env.REACT_APP_BACKEND_BASER_URL}/api/wishList/add-item`,
          bodyParameters,
          config
        )
        .then((response) => {
          let res = "Successful: " + response.data.message;
          toast.success(res, {
            position: "top-center",
            theme: "colored",
          });
        })
        .catch((error) => {
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
    } else {
      handleLoginModal();
    }
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
            onClick={() => handleAddToCart()}
          >
            <FaShoppingBasket />
          </button>
          <button
            className="wishListBTN"
            data-tooltip-id="tool-tip-wishList"
            onClick={() => handleAddToWishlist()}
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
