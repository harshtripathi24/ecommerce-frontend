import React, { useEffect, useState } from "react";

import MultiRangeSlider from "multi-range-slider-react";
import { useDispatch } from "react-redux";
import { changeMaxPrice, changeMinPrice } from "./filterSlice";
import { toast } from "react-toastify";

import Products from "../../Components/Products/ProductData";

const PriceRangeSelecter = ({ productsData }) => {
  const [minimumValue, setMinimumValue] = useState("");
  const [maximumValue, setMaximumValue] = useState("");
  const [minCaptionVal, setMinCaptionVal] = useState();
  const [maxCaptionVal, setMaxCaptionVal] = useState();

  const [minSelectValue, setMinSelectValue] = useState();
  const [maxSelectValue, setMaxSelectValue] = useState();
  const [isInitialLoad, setIsInitialLoad] = useState(false);

  const dispatch = useDispatch();

  function getMinMaxPrice(data) {
    // Helper function to extract price as a number
    const getPrice = (item) => parseFloat(item.price);

    if (!data || data.length === 0) {
      return { minPrice: null, maxPrice: null };
    }

    const prices = data.map((productList) => {
      return productList.map((product) => {
        return getPrice(product);
      });
    });

    if (prices.length > 0) {
      const minPrice = Math.min(...prices[0]);
      const maxPrice = Math.max(...prices[0]);

      return { minPrice, maxPrice };
    }
  }

  function generateLabels(min, max, numValues) {
    numValues = numValues - 2;

    const range = max - min;
    const increment = range / (numValues + 1);

    const values = [];

    values.push(min);

    for (let i = 1; i <= numValues; i++) {
      const value = min + i * increment;
      values.push(Math.round(value / 5) * 5); // Round to the nearest 25
    }

    values.push(max);

    return values;
  }

  const { minPrice, maxPrice } = getMinMaxPrice(productsData);

  const allLabels = generateLabels(minPrice, maxPrice, 5);

  const stringLabels = allLabels.toString();

  const myLables = stringLabels.split(",");

  const handleMinValueChange = (e) => {
    try {
      if (maximumValue <= e.target.value) {
        throw new Error(
          "Minimum Price can't be bigger than or equal to Maximum Price"
        );
      } else {
        setMinSelectValue(e.target.value);

        setMinimumValue(e.target.value);
        dispatch(changeMinPrice(e.target.value));
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        theme: "colored",
      });
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
        dispatch(changeMaxPrice(e.target.value));
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        theme: "colored",
      });
    }
  };

  const handleRangeInput = (e) => {
    if (!isInitialLoad) return; // Return early if it's the initial load

    setMinCaptionVal(myLables[e.minValue]);
    setMaxCaptionVal(myLables[e.maxValue]);
    setMinimumValue(myLables[e.minValue]);
    setMaximumValue(myLables[e.maxValue]);
    setMinSelectValue(myLables[e.minValue]);
    setMaxSelectValue(myLables[e.maxValue]);
    dispatch(changeMinPrice(myLables[e.minValue]));
    dispatch(changeMaxPrice(myLables[e.maxValue]));
  };

  useEffect(() => {
    if (!myLables.includes("NaN") && isInitialLoad === false) {
      setMinSelectValue(myLables[0]);

      setMaxSelectValue(myLables[3]);

      dispatch(changeMinPrice(myLables[0]));
      dispatch(changeMaxPrice(myLables[3]));

      setIsInitialLoad(true);
    }

    // Set isInitialLoad to false after initial load
  }, [myLables]);

  if (!myLables.includes("NaN")) {
    return (
      <React.Fragment>
        <MultiRangeSlider
          labels={myLables}
          min={0}
          max={4}
          minValue={myLables.indexOf(minSelectValue)}
          maxValue={myLables.indexOf(maxSelectValue)}
          step={1}
          minCaption={minCaptionVal}
          maxCaption={maxCaptionVal}
          onInput={(e) => handleRangeInput(e)}
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
          <option value={myLables.length > 0 ? myLables[0] : ""}>Min</option>
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
      </React.Fragment>
    );
  }
};

export default PriceRangeSelecter;
