import React, { useReducer } from "react";
import axios from "axios";
import SearchContext from "./searchContext";
import SearchReducer from "./searchReducer";

import { FETCH_SEARCH } from "../types";

const SearchURL = "https://api.themoviedb.org/3/search/multi";
const APIKey = "?api_key=0729def3e1c06a786ecc57e5d3d9a5ac";

const SearchState = props => {
  const initialState = {
    results: {}
  };

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  const fetchSearch = async query => {
    const res = await axios.get(`${SearchURL + APIKey}&${query}`);
    dispatch({ type: FETCH_SEARCH, payload: res.data });
  };

  return (
    <SearchContext.Provider value={{ fetchSearch, results: state.results }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchState;
