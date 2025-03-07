import React from "react";
import "../styles/globals.css";


const SearchBar = () => {
  return (
    <div className="card-container">
      <search>
          <div>
          <label>From</label>
            <input name="searchBar" id="search" placeholder="From"/>
          <label>To</label>
          <input name="searchBar" id="search" placeholder="To"/>
          </div>
      </search>
  </div>
  );
};

export default SearchBar;
