import { LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        loading: true
      };
    default:
      return {
        ...state
      };
  }
};
