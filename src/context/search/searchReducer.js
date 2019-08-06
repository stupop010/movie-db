import { FETCH_SEARCH } from "../types";

export default (state, action) => {
  switch (action.type) {
    case FETCH_SEARCH:
      return {
        ...state,
        results: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
