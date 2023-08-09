import React, { useEffect, useState } from "react";

import Products from "./ProductData";
import SingleProduct from "./SingleProduct";

import "./ProductsSection.css";
import "./ProductDevisionSection.css";
const ProductDevisonSection = ({ sectionType, productIds, devisonTitle }) => {
  const [isActive, setIsActive] = useState(1);
  //   const [productIds, setProductIds] = useState([8, 5, 4, 3, 16]);
  const [products, setProducts] = useState(Products);

  console.log(
    Products.filter((product) =>
      productIds.some((proId) => proId === product.pid)
    )
  );

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
        <div className="products">
          {products.map((product) => {
            return (
              <SingleProduct
                id={product.pid}
                key={product.pid}
                product={product}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductDevisonSection;
