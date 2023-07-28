import React from "react";

import Products from "./ProductData";
import SingleProduct from "./SingleProduct";
import "./ProductsSection.css";
const ProductsSection = () => {
  let checkBorder = 0;
  return (
    <>
      <div className="productSection">
        <div className="products">
          {Products.map((product) => {
            checkBorder++;
            return (
              <SingleProduct
                id={product.pid}
                product={product}
                checkBorder={checkBorder}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsSection;
