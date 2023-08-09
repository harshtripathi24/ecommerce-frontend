import React, { useEffect, useState } from "react";

import Products from "./ProductData";
import SingleProduct from "./SingleProduct";

import "./ProductsSection.css";
const ProductsSection = () => {
  const [isActive, setIsActive] = useState(1);
  const [category, setCategory] = useState("Featured Products");
  const [products, setProducts] = useState(Products);

  useEffect(() => {
    let tempProducts = Products.filter((product) =>
      product.categoryName.includes(category)
    );

    setProducts(tempProducts);
  }, [category]);

  let checkBorder = 0;
  return (
    <>
      <div className="productSection">
        <div className="selectCategoryBox">
          <ul className="categories">
            <li
              onClick={() => {
                setIsActive(1);
                setCategory("Featured Products");
              }}
              className={`${isActive === 1 ? "active" : ""}`}
            >
              <a>
                <span>Featured Products</span>
              </a>
            </li>
            <li
              onClick={() => {
                setIsActive(2);
                setCategory("New Arrivals");
              }}
              className={`${isActive === 2 ? "active" : ""}`}
            >
              <a>
                <span>New Arrivals </span>
              </a>
            </li>
            <li
              onClick={() => {
                setIsActive(3);
                setCategory("Most Viewed");
              }}
              className={`${isActive === 3 ? "active" : ""}`}
            >
              <a>
                <span>Most Viewed</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="products">
          {products.map((product) => {
            checkBorder++;
            return (
              <SingleProduct
                id={product.pid}
                key={product.pid}
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
