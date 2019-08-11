import React, { useReducer } from "react";
import axios from "axios";
import SearchContext from "./searchContext";
import SearchReducer from "./searchReducer";

import { FETCH_SEARCH, CLEAR_SEARCH } from "../types";

const SearchURL = "https://api.themoviedb.org/3/search/multi";
const APIKey = "?api_key=0729def3e1c06a786ecc57e5d3d9a5ac";

const SearchState = props => {
  const initialState = {
    results: {}
  };

  const [state, dispatch] = useReducer(SearchReducer, initialState);
  // fetchSearch(`query=${val}&page=1`);
  const fetchSearch = async (val, pageNumber) => {
    const res = await axios.get(
      `${SearchURL + APIKey}&query=${val}&page=${pageNumber}`
    );
    dispatch({ type: FETCH_SEARCH, payload: res.data });
  };

  const clearSearch = () => {
    dispatch({ type: CLEAR_SEARCH });
  };

  return (
    <SearchContext.Provider
      value={{ fetchSearch, results: state.results, clearSearch }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchState;
