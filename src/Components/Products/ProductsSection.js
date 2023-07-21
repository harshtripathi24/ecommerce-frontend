import React from "react";

import Products from "./ProductData";
import SingleProduct from "./SingleProduct";
import "./ProductsSection.css";
const ProductsSection = () => {
  return (
    <>
      <div className="productSection">
        <div className="products">
          {Products.map((product) => {
            return <SingleProduct id={product.pid} product={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsSection;
