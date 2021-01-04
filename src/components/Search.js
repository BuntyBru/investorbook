import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../stylesheets/search.css";

const SearchComponent = ({ input: keyword, onChange: setKeyword }) => {
  return (
    <div className="SearchBar">
      <input
        placeholder={"Search"}
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
      />
      <FontAwesomeIcon className="sicon" icon={faSearch} />
    </div>
  );
};

export default SearchComponent;
