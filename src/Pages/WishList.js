import React, { useEffect, useState } from "react";

import { useAuthContext } from "../Utilities/Context/AuthContext";
import PriceIcon from "../Utilities/Smaller Component/PriceIcon";
import axios from "axios";
import { toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";
import "./WishList.css";
import { useGlobalContext } from "../Utilities/Context/Context";
import emptyCartImg from "../Utilities/Images/UtiltiyImages/emptyCart.png";
const WishList = () => {
  const [itemsQuantity, setItemsQuantity] = useState({});
  const [wishList, setWishList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { closeNav, openLoginModal } = useGlobalContext();

  const { userToken, currentUser, loginAuthContext } = useAuthContext();

  const handleItemsQuantity = (e, id) => {
    let value = parseInt(e.target.value);

    setItemsQuantity({ ...itemsQuantity, [id]: value });
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

  const handleAddToCart = async (e, wishItem) => {
    e.preventDefault();

    if (userToken) {
      const config = {
        headers: { Authorization: `Bearer ${userToken}` },
      };

      const bodyParameters = {
        pid: wishItem.Product.id,
        uid: currentUser.id,
        quantity: itemsQuantity[wishItem.id],
        optionChosen: wishItem.optionChosen,
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
      openLoginModal();
    }
  };

  const handleRemoveItem = async (e, wishItem) => {
    e.preventDefault();

    if (userToken) {
      const config = {
        headers: { Authorization: `Bearer ${userToken}` },
      };

      await axios
        .delete(
          `${process.env.REACT_APP_BACKEND_BASER_URL}/api/wishList/delete/${wishItem.id}`,
          config
        )
        .then((response) => {
          getLogin(currentUser.id, userToken);

          console.log(response);

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
      openLoginModal();
    }
  };

  useEffect(() => {
    if (currentUser && currentUser.WishLists) {
      setWishList(currentUser.WishLists);
    }

    let itemQuan = {};

    if (wishList) {
      wishList.map((wishItem) => {
        itemQuan = {
          ...itemQuan,
          [wishItem.id]: wishItem.quantity,
        };
      });

      setItemsQuantity(itemQuan);
    }
  }, [currentUser]);

  useEffect(() => {
    closeNav();
  }, []);

  return (
    <>
      <div className="wishTitleDiv">
        <h3 className="wishListTitle">
          {" "}
          <FaHeart /> WishList
        </h3>
      </div>

      {wishList.length > 0 ? (
        <div className="wishlistContainer">
          {wishList.map((wishItem) => {
            return (
              <div className="singleWish">
                <img
                  src={wishItem.Product.img}
                  alt={wishItem.Product.name}
                  className="wishImg"
                />

                <div className="infoDiv">
                  <p className="wishName">{wishItem.Product.name}</p>
                  <p className="productAuthor">{wishItem.Product.author}</p>
                  <p className="optionChosen">{wishItem.optionChosen}</p>

                  <p className="productPrice">
                    <PriceIcon />
                    {wishItem.Product.price}
                    {"   "}

                    <span className="fakePrice">
                      <PriceIcon />
                      {wishItem.Product.fakePrice}
                    </span>
                  </p>
                </div>

                <div className="actionDiv">
                  <label className="quantityLabel">Qty:</label>

                  <select
                    defaultValue={wishItem.quantity}
                    name="quantity"
                    className="quantity"
                    id="quantity"
                    onChange={(e) => handleItemsQuantity(e, wishItem.id)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                  <button
                    onClick={(e) => handleAddToCart(e, wishItem)}
                    className="addToCartBtn"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={(e) => handleRemoveItem(e, wishItem)}
                    className="removeItemBtn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="wishlistContainer">
          <div className="emptyDiv">
            <img src={emptyCartImg} className="emptyCrtImg" alt="Empty Image" />
            <h4 className="emptyText">
              Empty Wishlist please Add Some Products
            </h4>
            <button className="homeBtn">Back to Home</button>
          </div>
        </div>
      )}
    </>
  );
};

export default WishList;
