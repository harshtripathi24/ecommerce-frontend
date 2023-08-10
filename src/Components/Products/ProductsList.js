import React from "react";

import SingleProduct from "./SingleProduct";

import "./ProductsList.css";
const ProductsList = ({ products }) => {
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <SingleProduct id={product.pid} key={product.pid} product={product} />
        );
      })}
    </div>
  );
};

export default ProductsList;
