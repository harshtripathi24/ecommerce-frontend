import React, { useState } from "react";

import "./Search.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();
  const searchInputHandler = (e) => {
    setSearchText(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    console.log(searchText);

    navigate(`searched_page/${searchText}`);
    navigate(0);
  };

  return (
    <div className="searchDiv">
      <input
        type="text"
        id="search"
        className="searchField"
        value={searchText}
        onChange={searchInputHandler}
        placeholder="Search..."
      ></input>
      <button onClick={searchHandler} className="search-button" type="submit">
        Search
      </button>
    </div>
  );
};

export default Search;
