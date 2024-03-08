import React from "react";

import { useGlobalContext } from "../../Utilities/Context/Context";
import PriceIcon from "../../Utilities/Smaller Component/PriceIcon";

import "./ProductQuickView.css";
import { Link } from "react-router-dom";

const ProductQucikView = (props) => {
  const { product } = useGlobalContext();
  return (
    <div className="quickView">
      <div className="left">
        <img src={product.img} alt={product.name} className="productImage" />
      </div>
      <div className="right">
        <h6 className="titleText">
          {product.name} <span>- {product.author}</span>
        </h6>
        <div className="priceDiv">
          <h6>
            <PriceIcon />
            {product.price}
            {"    "}
            <span>
              <PriceIcon />
              {product.fakePrice}
            </span>
          </h6>
        </div>
        <div className="detailsDiv">
          <Link
            target="_blank"
            to={`${process.env.REACT_APP_BASE_URL}/product/${product.pid}`}
          >
            See More Details
          </Link>
        </div>
        <div className="addDiv">
          <form action="" className="cartForm" method="post">
            <input
              type="number"
              name="quantity"
              defaultValue={1}
              id="quantity"
            />
            <button type="submit">Add to Cart</button>
          </form>
        </div>
        <div className="descriptionDiv">
          <p>{product.shortDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductQucikView;
