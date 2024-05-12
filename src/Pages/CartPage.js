import React, { useEffect, useState } from "react";
import "./CartPage.css";
import { useAuthContext } from "../Utilities/Context/AuthContext";
import { useGlobalContext } from "../Utilities/Context/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { RiShoppingCart2Fill } from "react-icons/ri";
import PriceIcon from "../Utilities/Smaller Component/PriceIcon";
import emptyCartImg from "../Utilities/Images/UtiltiyImages/emptyCart.png";

const CartPage = () => {
  const [itemsQuantity, setItemsQuantity] = useState({});
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();
  const { closeNav, openLoginModal } = useGlobalContext();

  const { userToken, currentUser, loginAuthContext } = useAuthContext();

  const handleHomeClick = () => {
    navigate("/");
  };
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

  const handleAddToCart = async (e, cartItem) => {
    e.preventDefault();

    if (userToken) {
      const config = {
        headers: { Authorization: `Bearer ${userToken}` },
      };

      const bodyParameters = {
        pid: cartItem.Product.id,
        uid: currentUser.id,
        quantity: itemsQuantity[cartItem.id],
        optionChosen: cartItem.optionChosen,
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

  const handleRemoveItem = async (e, cartItem) => {
    e.preventDefault();

    if (userToken) {
      const config = {
        headers: { Authorization: `Bearer ${userToken}` },
      };

      await axios
        .delete(
          `${process.env.REACT_APP_BACKEND_BASER_URL}/api/cartList/delete/${cartItem.id}`,
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

  useEffect(() => {
    if (currentUser && currentUser.CartLists) {
      setCartList(currentUser.CartLists);
    }

    let itemQuan = {};

    let totPrice = 0;

    if (cartList) {
      cartList.map((cartItem) => {
        itemQuan = {
          ...itemQuan,
          [cartItem.id]: cartItem.quantity,
        };

        totPrice += cartItem.Product.price * cartItem.quantity;
      });

      setItemsQuantity(itemQuan);
      setTotalPrice(totPrice);
    }
  }, [currentUser, cartList]);

  useEffect(() => {
    closeNav();
  }, []);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let totPrice = 0;
      if (cartList && itemsQuantity) {
        totPrice = cartList.reduce((acc, cartItem) => {
          const itemPrice = cartItem.Product.price * itemsQuantity[cartItem.id];
          return acc + itemPrice;
        }, 0);
      }
      setTotalPrice(totPrice);
    };

    calculateTotalPrice();
  }, [cartList, itemsQuantity]);

  console.log(itemsQuantity);

  return (
    <>
      <div className="wishTitleDiv">
        <h3 className="wishListTitle">
          <RiShoppingCart2Fill /> Your Cart
        </h3>
      </div>

      {cartList.length > 0 ? (
        <div className="wishlistContainer">
          {cartList.map((cartItem) => {
            return (
              <div className="singleWish">
                <img
                  src={cartItem.Product.img}
                  alt={cartItem.Product.name}
                  className="wishImg"
                />

                <div className="infoDiv">
                  <p className="wishName">{cartItem.Product.name}</p>
                  <p className="productAuthor">{cartItem.Product.author}</p>
                  <p className="optionChosen">{cartItem.optionChosen}</p>

                  <p className="productPrice">
                    <PriceIcon />
                    {cartItem.Product.price}
                    {"   "}

                    <span className="fakePrice">
                      <PriceIcon />
                      {cartItem.Product.fakePrice}
                    </span>
                  </p>

                  <p>{`${cartItem.Product.price}x ${
                    itemsQuantity[cartItem.id]
                  } = ${
                    cartItem.Product.price * itemsQuantity[cartItem.id]
                  }`}</p>
                </div>

                <div className="actionDiv">
                  <label className="quantityLabel">Qty:</label>

                  <select
                    defaultValue={cartItem.quantity}
                    name="quantity"
                    className="quantity"
                    id="quantity"
                    onChange={(e) => handleItemsQuantity(e, cartItem.id)}
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
                  <p className="itemTotalPrice">
                    {" "}
                    <PriceIcon />{" "}
                    {`${cartItem.Product.price * itemsQuantity[cartItem.id]}`}
                  </p>
                  <button
                    onClick={(e) => handleRemoveItem(e, cartItem)}
                    className="removeItemBtn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}

          <div className="totalPriceDiv">
            <p className="deliveryCharge">Delivery Charge: 0 +</p>
            <h3 className="totalPrice">
              Total:{" "}
              <span className="totalAmount">
                {" "}
                <PriceIcon />
                {totalPrice}{" "}
              </span>
            </h3>

            <button className="checkoutBtn">Check Out</button>
          </div>
        </div>
      ) : (
        <div className="wishlistContainer">
          <div className="emptyDiv">
            <img src={emptyCartImg} className="emptyCrtImg" alt="Empty" />
            <h4 className="emptyText">
              Your Cart is Empty please Add Some Products
            </h4>
            <button onClick={() => handleHomeClick()} className="homeBtn">
              Back to Home
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
