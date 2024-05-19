import React, { useEffect, useState } from "react";

import { FiFilter } from "react-icons/fi";

import { useGlobalContext } from "../Utilities/Context/Context";

import axios from "axios";
import { toast } from "react-toastify";

import Products from "../Components/Products/ProductData";

import { useSelector } from "react-redux";

import FilterModal from "../Utilities/Components/FilterModal";
import "./SearchedPage.css";
import ProductDevisonSection from "../Components/Products/ProductDevisonSection";
import { useParams } from "react-router-dom";
const SearchedPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const filters = useSelector((state) => state.filters);

  const {
    openModal,
    closeModal,
    openFilterModal,
    closeFilterModal,
    setSearchedProducts,
  } = useGlobalContext();

  const handleFilterBtn = () => {
    openFilterModal();
    openModal();
  };

  const detectWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  const { closeNav } = useGlobalContext();

  const { tagName } = useParams();

  useEffect(() => {
    closeNav();

    if (tagName) {
      axios
        .post(
          `${process.env.REACT_APP_BACKEND_BASER_URL}/api/products/search`,
          {
            searchTerm: tagName,
          }
        )
        .then((response) => {
          setProducts(response.data.products);
          setFilteredProducts(response.data.products);
          setSearchedProducts(response.data.products);

          // setIsLoaded(true);
        })
        .catch((error) => {
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tagName]);

  useEffect(() => {
    // console.log(products);

    const priceProduct = products.filter((product) => {
      let productCheck = false;

      if (
        parseInt(filters.priceMinimum) <= product.price &&
        product.price <= parseInt(filters.priceMaximum)
      ) {
        productCheck = true;
      }

      return productCheck;
    });

    setFilteredProducts(priceProduct);
    console.log("products below");
    console.log(products);
    console.log("price product below");
    console.log(priceProduct);
  }, [filters]);

  useEffect(() => {
    window.addEventListener("resize", detectWindowWidth);

    return () => {
      window.removeEventListener("resize ", detectWindowWidth);
    };
  }, [windowWidth]);

  if (windowWidth > 1232) {
    return (
      <>
        <div className="SearchedPageMain">
          <div className="deskFilterDiv">
            <FilterModal productsData={products} />
          </div>

          <div className="Products">
            {console.log("Main Product Below")}
            {console.log(filteredProducts)}
            {products.length > 0 && (
              <ProductDevisonSection
                sectionType={2}
                devisonTitle={"You Searched For"}
                productsData={filteredProducts}
              />
            )}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="SearchedPageMain">
          <div className="filterDiv">
            <button
              className="filterBtn"
              onClick={() => handleFilterBtn()}
              type="button"
            >
              <FiFilter /> Filter
            </button>
          </div>

          <div className="Products">
            {products.length > 0 && (
              <ProductDevisonSection
                sectionType={2}
                devisonTitle={"You Searched For"}
                productsData={filteredProducts}
              />
            )}
          </div>
        </div>
      </>
    );
  }
};

export default SearchedPage;
