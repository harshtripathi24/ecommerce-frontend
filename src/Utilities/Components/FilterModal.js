import React from "react";
import { FaStar } from "react-icons/fa";

import { toTitleCase, toSnakeCase } from "../Functions/StringFunctions";

import "./FilterModal.css";
import PriceRangeSelecter from "../../Components/Filter/PriceRangeSelecter";

const FilterData = [
  {
    filterHeading: "Type",
    filters: ["Hard Copy", "Audio Book", "PDF"],
  },
  {
    filterHeading: "Generes",
    filters: [
      "Self Help Books",
      "Thriller Books",
      "Romance Books",
      "Horror Books",
      "Fantasy Books",
    ],
  },
];

const FilterModal = () => {
  return (
    <>
      <div className="FilterModalMain">
        <div className="FormDiv">
          <form action="/action_page.php">
            <div className="filterGroup 1">
              <p className="filterHeader">Ratings: </p>

              <input
                type="checkbox"
                id="4_star_&_above"
                name="4_star_&_above"
                value="4_star_&_above"
              />
              <label htmlFor="4_star_&_above">
                {" "}
                4
                <span className="starClass">
                  <FaStar />
                </span>{" "}
                & Above
              </label>

              <br />
              <input
                type="checkbox"
                id="3_star_&_above"
                name="3_star_&_above"
                value="3_star_&_above"
              />
              <label htmlFor="3_star_&_above">
                {" "}
                3
                <span className="starClass">
                  <FaStar />
                </span>{" "}
                & Above
              </label>
              <br />
              <input
                type="checkbox"
                id="2_star_&_above"
                name="2_star_&_above"
                value="2_star_&_above"
              />
              <label htmlFor="2_star_&_above">
                {" "}
                2
                <span className="starClass">
                  <FaStar />{" "}
                </span>{" "}
                & Above
              </label>
            </div>

            <div className="filterGroup">
              <p className="filterHeader">Price:</p>

              <PriceRangeSelecter />
            </div>

            <div className="filterGroup 3">
              {FilterData.map((filterSet, index) => {
                return (
                  <React.Fragment key={index}>
                    <p className="filterHeader">{filterSet.filterHeading}:</p>

                    {filterSet.filters.map((filter, index) => {
                      let snakeVal = toSnakeCase(filter);
                      let titleVal = toTitleCase(filter);

                      return (
                        <React.Fragment key={index}>
                          <input
                            type="checkbox"
                            id={`${snakeVal}`}
                            name={`${snakeVal}`}
                            value={`${snakeVal}`}
                          />
                          <label htmlFor={snakeVal}> {titleVal}</label>
                          <br />
                        </React.Fragment>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </div>

            <input className="submitBtn" type="submit" value="Apply Filters" />
          </form>
        </div>
      </div>
    </>
  );
};

export default FilterModal;
