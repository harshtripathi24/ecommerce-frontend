import React, { useEffect, useState } from "react";

import Products from "./ProductData";
import SingleProduct from "./SingleProduct";
import ProductsList from "./ProductsList";

import "./ProductDevisionSection.css";
const ProductDevisonSection = ({ sectionType, productIds, devisonTitle }) => {
  const [isActive, setIsActive] = useState(1);
  const [products, setProducts] = useState(Products);

  useEffect(() => {
    let tempProducts = Products.filter((product) =>
      productIds.some((proId) => proId === product.pid)
    );
    setProducts(tempProducts);
  }, []);

  return (
    <>
      <div>
        {sectionType === 2 ? (
          <div className="devisonSection2">
            <div className="titleContainer">
              <p>{devisonTitle}</p>
            </div>
          </div>
        ) : (
          <div className="devisonSection1">
            <div className="sectionBackground">
              <p>{devisonTitle}</p>
            </div>
          </div>
        )}
      </div>

      <div className="productSection">
        <ProductsList products={products} />
      </div>
    </>
  );
};

export default ProductDevisonSection;
