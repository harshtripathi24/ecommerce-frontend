import React, { useEffect, useState } from "react";

import Products from "./ProductData";

import ProductsList from "./ProductsList";

import axios from "axios";
import { toast } from "react-toastify";
import MoonLoader from "react-spinners/MoonLoader";

import "./ProductDevisionSection.css";
const ProductDevisonSection = ({
  sectionType,
  productIds,
  devisonTitle,
  tagName,
}) => {
  const [products, setProducts] = useState(Products);
  const [isLoaded, setIsLoaded] = useState(false);

  const mainColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--primary-color")
    .trim();

  useEffect(() => {
    setIsLoaded(false);

    axios
      .post(`${process.env.REACT_APP_BACKEND_BASER_URL}/api/tags/show-tag`, {
        tag: tagName,
      })
      .then((response) => {
        setProducts(response.data);
        setIsLoaded(true);

        // setIsLoaded(true);
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

      {isLoaded && (
        <div className="productSection">
          <ProductsList products={products} />
        </div>
      )}
    </>
  );
};

export default ProductDevisonSection;
