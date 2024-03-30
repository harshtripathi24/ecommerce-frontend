import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

import { toTitleCase, toSnakeCase } from "../Functions/StringFunctions";
import MultiRangeSlider from "multi-range-slider-react";
import Products from "../../Components/Products/ProductData";

import "./FilterModal.css";
import { ConnectedTvOutlined } from "@mui/icons-material";

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
  const [maxValue, setMaxValue] = useState();
  const [minimumValue, setMinimumValue] = useState("");
  const [maximumValue, setMaximumValue] = useState("");
  const [minCaptionVal, setMinCaptionVal] = useState();
  const [maxCaptionVal, setMaxCaptionVal] = useState();

  const [minSelectValue, setMinSelectValue] = useState();
  const [maxSelectValue, setMaxSelectValue] = useState();

  function getMinMaxPrice(data) {
    // Helper function to extract price as a number
    const getPrice = (item) => parseFloat(item.price);

    if (!data || data.length === 0) {
      return { minPrice: null, maxPrice: null };
    }

    const prices = data.map(getPrice);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    return { minPrice, maxPrice };
  }

  function generateLabels(min, max, numValues) {
    numValues = numValues - 2;

    const range = max - min;
    const increment = range / (numValues + 1);

    const values = [];

    values.push(min);

    for (let i = 1; i <= numValues; i++) {
      const value = min + i * increment;
      values.push(Math.round(value / 50) * 50); // Round to the nearest 25
    }

    values.push(max);

    return values;
  }

  const { minPrice, maxPrice } = getMinMaxPrice(Products);

  const allLabels = generateLabels(minPrice, maxPrice, 5);

  const stringLabels = allLabels.toString();

  const myLables = stringLabels.split(",");

  const handleMinValueChange = (e) => {
    console.log(e.target.value);

    try {
      console.log("Maximum Value Right now is:" + maximumValue);
      if (maximumValue <= e.target.value) {
        throw new Error(
          "Minimum Price can't be bigger than or equal to Maximum Price"
        );
      } else {
        setMinSelectValue(e.target.value);
        setMinimumValue(e.target.value);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleMaxValueChange = (e) => {
    try {
      if (minimumValue >= e.target.value) {
        throw new Error(
          "Maximimum Price can't be smallrer or equal to Minimum Price"
        );
      } else {
        setMaxSelectValue(e.target.value);
        setMaximumValue(e.target.value);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleRangeInput = (e) => {
    console.log("Ye dekho e ka value: " + e.maxValue);
    setMinCaptionVal(myLables[e.minValue]);
    setMaxCaptionVal(myLables[e.maxValue]);
    setMinimumValue(myLables[e.minValue]);
    setMaximumValue(myLables[e.maxValue]);
    setMinSelectValue(myLables[e.minValue]);
    setMaxSelectValue(myLables[e.maxValue]);
  };

  useEffect(() => {
    setMinSelectValue(myLables[0]);
    setMaxSelectValue(myLables[3]);
    setMaxValue(3);
    console.log("Ye Dekh max select value useEffect ki: " + maxSelectValue);
  }, []);

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

              {console.log("The Max Select val is:", maxSelectValue)}

              <MultiRangeSlider
                labels={myLables}
                min={0}
                max={4}
                minValue={myLables.indexOf(minSelectValue)}
                maxValue={myLables.indexOf(maxSelectValue)}
                step={1}
                minCaption={minCaptionVal}
                maxCaption={maxCaptionVal}
                onChange={(e) => handleRangeInput(e)}
              />
              <br />
              <select
                className="priceSelect"
                defaultValue="Min"
                name="minVal"
                id="minVal"
                value={minSelectValue}
                onChange={(e) => handleMinValueChange(e)}
              >
                <option value={myLables[0]}>Min</option>
                {myLables.map((singleVal, index) => {
                  return (
                    <React.Fragment key={index}>
                      <option value={singleVal}>{singleVal}</option>
                    </React.Fragment>
                  );
                })}
              </select>
              <span> to</span>
              <select
                className="priceSelect"
                defaultValue="Max"
                name="maxVal"
                id="maxVal"
                value={maxSelectValue}
                onChange={(e) => handleMaxValueChange(e)}
              >
                <option value={myLables[4]}>Max</option>
                {myLables.map((singleVal, index) => {
                  if (index > 0)
                    return (
                      <option key={index} value={singleVal}>
                        {singleVal}
                      </option>
                    );
                })}
              </select>
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
