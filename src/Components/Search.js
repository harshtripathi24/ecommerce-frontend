import React from "react";

import "./Search.css";

const Search = () => {
  let searchInputHandler = (e) => {};
  return (
    <div className="searchDiv">
      <input
        type="text"
        id="search"
        className="searchField"
        onChange={searchInputHandler}
        placeholder="Search..."
      ></input>
      <button className="search-button" type="submit">
        Search
      </button>
    </div>
  );
};

export default Search;
