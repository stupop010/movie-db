import {
  FETCHING_NOW_PLAYING,
  LOADING,
  FETCH_MOVIE,
  FETCH_VIDEOS,
  FETCH_CAST,
  FETCH_REVIEWS,
  FETCH_POSTERS,
  FETCH_SIMILAR
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case FETCHING_NOW_PLAYING:
      return {
        ...state,
        nowPlaying: action.payload,
        movieLoading: false
      };
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload,
        movieLoading: false
      };
    case FETCH_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        movieLoading: false
      };
    case FETCH_CAST:
      return {
        ...state,
        cast: action.payload,
        movieLoading: false
      };
    case FETCH_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        movieLoading: false
      };
    case FETCH_POSTERS: {
      return {
        ...state,
        posters: action.payload,
        movieLoading: false
      };
    }
    case FETCH_SIMILAR: {
      return {
        ...state,
        similarMovies: action.payload,
        movieLoading: false
      };
    }
    case LOADING:
      return {
        ...state,
        movieLoading: true
      };
    default:
      return {
        ...state
      };
  }
};
