import React, { useEffect, useState, useContext } from "react";
import SearchContext from "../../context/search/searchContext";
import history from "../../history";

import SearchForm from "../SearchForm";

const SearchPage = props => {
  const [pageNumber, setPageNumber] = useState(1);
  const [value, setValue] = useState("");
  const searchContext = useContext(SearchContext);
  const { fetchSearch, results } = searchContext;

  console.log(results);

  const onChange = e => {
    let id;
    if (id) {
      window.clearTimeout(id);
    }
    const val = e.target.value;
    setValue(e.target.value);
    id = window.setTimeout(() => {
      if (val) {
        history.push(`/search?query=${val}&page=1`);
        fetchSearch(`query=${val}&page=1`);
      }
    }, 800);
  };

  const onClick = () => {
    setPageNumber(pageNumber + 1);
    console.log("click");
    console.log(value);
    if (value) {
      history.push(`/search?query=${value}&page=${pageNumber + 1}`);
    }
    // setPageNumber(PageNumber + 1);
    // console.log(history.location);
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="search-container">
      {/* <SearchForm onChange={onChange} onSubmit={onSubmit}  /> */}
      <div>
        <form>
          <label className="label">Search</label>
          <input
            className="search-input"
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </form>
        <button onClick={onClick}>fdjhbgksjlkd</button>
      </div>
    </div>
  );
};

export default SearchPage;
