import React, { useEffect, useState, useContext } from "react";
import SearchContext from "../../context/search/searchContext";
import history from "../../history";
import SearchResult from "../SearchResult";

const SearchPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [value, setValue] = useState("");
  const searchContext = useContext(SearchContext);
  const { fetchSearch, clearSearch, results } = searchContext;

  useEffect(() => {
    if (window.location.search) {
      const va = window.location.search.split("=")[1].split("&")[0];
      const page = window.location.search.split("=")[2];
      if (value && page) {
        fetchSearch(va, Number(page));
      }
    } else {
      clearSearch();
    }
    // eslint-disable-next-line
  }, [window.location.search]);

  const onChange = e => {
    const val = e.target.value;
    setValue(val);
    if (val) {
      history.push(`/search?query=${val}&page=1`);
      setPageNumber(1);
    }
  };

  const onClickForward = () => {
    setPageNumber(pageNumber + 1);
    history.push(`/search?query=${value}&page=${pageNumber + 1}`);
  };

  const onClickPrevious = () => {
    setPageNumber(pageNumber - 1);
    history.push(`/search?query=${value}&page=${pageNumber - 1}`);
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="search-container">
      <div>
        <form>
          <label className="label">Search</label>
          <input
            className="search-input"
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </form>
        <SearchResult
          data={results}
          onClickForward={onClickForward}
          onClickPrevious={onClickPrevious}
        />
      </div>
    </div>
  );
};

export default SearchPage;
