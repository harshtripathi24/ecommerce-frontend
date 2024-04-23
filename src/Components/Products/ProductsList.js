import React from "react";

import SingleProduct from "./SingleProduct";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "./ProductsList.css";
const ProductsList = ({ products }) => {
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            id={product.Product.id}
            key={product.Product.id}
            product={product.Product}
          />
        );
      })}
      <ReactTooltip
        id="tool-tip-basket"
        place="top"
        variant="success"
        offset={8}
        style={{
          backgroundColor: "var(--primary-color)",
          padding: 5,
        }}
        className="toolTip"
        html="<p>Add to Cart </p>"
      />
      <ReactTooltip
        id="tool-tip-wishList"
        place="top"
        variant="success"
        offset={8}
        style={{
          backgroundColor: "var(--primary-color)",
          padding: 5,
        }}
        className="toolTip"
        html="<p>Add to Wishlist</p>"
      />
      <ReactTooltip
        id="tool-tip-details"
        place="top"
        variant="success"
        offset={8}
        style={{
          backgroundColor: "var(--primary-color)",
          padding: 5,
        }}
        className="toolTip"
        html="<p>View Details</p>"
      />
      <ReactTooltip
        id="tool-tip-quickView"
        place="top"
        variant="success"
        offset={8}
        style={{
          backgroundColor: "var(--primary-color)",
          padding: 5,
        }}
        className="toolTip"
        html="<p>Quick View </p>"
      />
    </div>
  );
};

export default ProductsList;
