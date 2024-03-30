import React from "react";

import { FiFilter } from "react-icons/fi";

import { useGlobalContext } from "../Utilities/Context/Context";

import "./SearchedPage.css";
import ProductDevisonSection from "../Components/Products/ProductDevisonSection";
const SearchedPage = () => {
  const { openModal, closeModal, openFilterModal, closeFilterModal } =
    useGlobalContext();

  const handleFilterBtn = () => {
    openFilterModal();
    openModal();
  };

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
          <ProductDevisonSection
            sectionType={2}
            productIds={[]}
            devisonTitle={"You Searched For"}
          />
        </div>
      </div>
    </>
  );
};

export default SearchedPage;
