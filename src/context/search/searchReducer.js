import { FETCH_SEARCH, CLEAR_SEARCH } from "../types";

export default (state, action) => {
  switch (action.type) {
    case FETCH_SEARCH:
      return {
        ...state,
        results: action.payload
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        results: {}
      };
    default:
      return {
        ...state
      };
  }
};
