import {
  FETCHING_AIRING_TV,
  FETCH_TV,
  FETCH_TV_VIDEOS,
  FETCH_TV_CAST,
  FETCH_TV_POSTERS,
  FETCH_TV_RECOMMEND,
  LOADING
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case FETCHING_AIRING_TV:
      return {
        ...state,
        tvListing: action.payload,
        tvLoading: false
      };
    case FETCH_TV:
      return {
        ...state,
        tv: action.payload,
        tvLoading: false
      };
    case FETCH_TV_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        tvLoading: false
      };
    case FETCH_TV_CAST:
      return {
        ...state,
        cast: action.payload,
        tvLoading: false
      };
    case FETCH_TV_POSTERS:
      return {
        ...state,
        posters: action.payload,
        tvLoading: false
      };
    case FETCH_TV_RECOMMEND:
      return {
        ...state,
        recommended: action.payload,
        tvLoading: false
      };
    case LOADING:
      return {
        ...state,
        tvLoading: true
      };
    default:
      return {
        ...state
      };
  }
};
