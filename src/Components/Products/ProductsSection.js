import React, { useState } from "react";

import Products from "./ProductData";
import SingleProduct from "./SingleProduct";
import "./ProductsSection.css";
const ProductsSection = () => {
  const [isActive, setIsActive] = useState(null);

  let checkBorder = 0;
  return (
    <>
      <div className="productSection">
        <div className="selectCategoryBox">
          <ul className="categories">
            <li
              onClick={() => setIsActive(1)}
              className={`${isActive === 1 ? "active" : ""}`}
            >
              <a>
                <span>Featured Products</span>
              </a>
            </li>
            <li
              onClick={() => setIsActive(2)}
              className={`${isActive === 2 ? "active" : ""}`}
            >
              <a>
                <span>New Arrivals </span>
              </a>
            </li>
            <li
              onClick={() => setIsActive(3)}
              className={`${isActive === 3 ? "active" : ""}`}
            >
              <a>
                <span>Most Viewed</span>
              </a>
            </li>
          </ul>
        </div>
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
