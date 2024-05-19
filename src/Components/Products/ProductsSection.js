import React, { useEffect, useState, CSSProperties } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Products from "./ProductData";

import ProductsList from "./ProductsList";

import MoonLoader from "react-spinners/MoonLoader";
import "react-toastify/dist/ReactToastify.css";
import "./ProductsSection.css";
const ProductsSection = () => {
  const [isActive, setIsActive] = useState(1);
  const [category, setCategory] = useState("Featured Products");
  const [products, setProducts] = useState(Products);
  const [isLoaded, setIsLoaded] = useState(false);

  const mainColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--primary-color")
    .trim();

  useEffect(() => {
    setIsLoaded(false);

    axios
      .post(`${process.env.REACT_APP_BACKEND_BASER_URL}/api/tags/show-tag`, {
        tag: category,
      })
      .then((response) => {
        setProducts(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        setIsLoaded(false);

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

    // setProducts(tempProducts);
  }, [category]);

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

        {!isLoaded && (
          <div className="loader">
            <MoonLoader
              color={mainColor}
              loading={!isLoaded}
              size={60}
              className="loaderMain"
              width={15}
              height={100}
            />
          </div>
        )}

        {isLoaded && <ProductsList products={products} />}
      </div>
    </>
  );
};

export default ProductsSection;
