import React, { useEffect, useState } from "react";

import { FiFilter } from "react-icons/fi";

import { useGlobalContext } from "../Utilities/Context/Context";

import Products from "../Components/Products/ProductData";

import FilterModal from "../Utilities/Components/FilterModal";
import "./SearchedPage.css";
import ProductDevisonSection from "../Components/Products/ProductDevisonSection";
const SearchedPage = () => {
  const [searchedProduct, setSearchedProduct] = useState();
  const [windoWidth, setWindoWidth] = useState(window.innerWidth);

  const { openModal, closeModal, openFilterModal, closeFilterModal } =
    useGlobalContext();

  const handleFilterBtn = () => {
    openFilterModal();
    openModal();
  };

  const detectWindowWidth = () => {
    setWindoWidth(window.innerWidth);
  };

  const { closeNav } = useGlobalContext();

  useEffect(() => {
    closeNav();

    const FetchProdctIds = async () => {
      const prodIds = await Products.map((product) => product.pid);
      setSearchedProduct(prodIds);
    };

    FetchProdctIds(); // run it, run it
  }, []);

  useEffect(() => {
    window.addEventListener("resize", detectWindowWidth);

    return () => {
      window.removeEventListener("resize ", detectWindowWidth);
    };
  }, [windoWidth]);

  if (windoWidth > 1232) {
    return (
      <>
        <div className="SearchedPageMain">
          <div className="deskFilterDiv">
            <FilterModal />
          </div>

          <div className="Products">
            {console.log("Searched Proudct now is " + searchedProduct)}
            {searchedProduct && (
              <ProductDevisonSection
                sectionType={2}
                productIds={searchedProduct}
                devisonTitle={"You Searched For"}
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
            {console.log("Searched Proudct now is " + searchedProduct)}
            {searchedProduct && (
              <ProductDevisonSection
                sectionType={2}
                productIds={searchedProduct}
                devisonTitle={"You Searched For"}
              />
            )}
          </div>
        </div>
      </>
    );
  }
};

export default SearchedPage;
