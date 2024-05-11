import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import { toTitleCase, toSnakeCase } from "../Functions/StringFunctions";
import { useDispatch } from "react-redux";

import {
  changeRatings,
  changeType,
  changeGenres,
} from "../../Components/Filter/filterSlice";

import "./FilterModal.css";
import PriceRangeSelecter from "../../Components/Filter/PriceRangeSelecter";

const FilterData = [
  {
    filterHeading: "Type",
    filters: ["Hard Copy", "Audio Book", "PDF"],
  },
  {
    filterHeading: "Genres",
    filters: [
      "Self Help Books",
      "Thriller Books",
      "Romance Books",
      "Horror Books",
      "Fantasy Books",
    ],
  },
];

const FilterModal = ({ productsData }) => {
  const [ratingArray, setRatingArray] = useState([0]);
  const [typeArray, setTypeArray] = useState([]);
  const [genresArray, setGenresArray] = useState([]);

  const dispatch = useDispatch();

  const handleRatingSelect = (e) => {
    const value = parseInt(e.target.value);
    const isChecked = e.target.checked;

    let newArray;

    if (isChecked) {
      // If the checkbox is checked, add the value to the array
      newArray = [...ratingArray.filter((item) => item !== 0), value];
    } else {
      // If the checkbox is unchecked, remove the value from the array
      newArray = ratingArray.filter((item) => item !== value);
    }

    // If the resulting array is empty, add 0 to the array
    if (newArray.length === 0) {
      newArray = [0];
    }

    setRatingArray(newArray);
    dispatch(changeRatings(newArray));
  };

  const handleSelectFilters = (e, heading) => {
    let value = e.target.value;
    let newTypeArray;
    let newGenresArray;

    if (
      e.target.checked &&
      !typeArray.includes(value) &&
      !genresArray.includes(value)
    ) {
      if (heading === "Type") {
        newTypeArray = [...typeArray, value];
        setTypeArray(newTypeArray);
        dispatch(changeType(newTypeArray));
        console.log(newTypeArray);
      } else if (heading === "Genres") {
        newGenresArray = [...genresArray, value];
        setGenresArray(newGenresArray);
        dispatch(changeGenres(newGenresArray));
      }
    } else {
      if (heading === "Type") {
        newTypeArray = typeArray.filter((item) => item !== value);
        setTypeArray(newTypeArray);
        dispatch(changeType(newTypeArray));
      } else if (heading === "Genres") {
        newGenresArray = genresArray.filter((item) => item !== value);
        setGenresArray(newGenresArray);

        dispatch(changeGenres(newGenresArray));
      }
    }
  };

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
                value="4"
                onChange={(e) => handleRatingSelect(e)}
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
                value="3"
                onChange={(e) => handleRatingSelect(e)}
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
                value="2"
                onChange={(e) => handleRatingSelect(e)}
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

              <PriceRangeSelecter productsData={[productsData]} />
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
                            value={`${titleVal}`}
                            onChange={(e) =>
                              handleSelectFilters(e, filterSet.filterHeading)
                            }
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
