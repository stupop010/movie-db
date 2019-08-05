import { FETCH_SEASON, FETCH_SEASON_VIDEO } from "../types";

export default (state, action) => {
  switch (action.type) {
    case FETCH_SEASON:
      return {
        ...state,
        season: action.payload
      };
    case FETCH_SEASON_VIDEO:
      return {
        ...state,
        videos: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
