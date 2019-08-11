import React, { useReducer } from "react";
import axios from "axios";
import MoviesContext from "./moviesContext";
import MoviesReducer from "./moviesReducer";

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

const baseURL = "https://api.themoviedb.org/3/movie/";
const ApiString = `?api_key=0729def3e1c06a786ecc57e5d3d9a5ac`;

const MoviesState = props => {
  const initialState = {
    nowPlaying: [],
    movieLoading: false,
    movie: {},
    videos: [],
    cast: [],
    reviews: [],
    posters: [],
    similarMovies: []
  };

  const [state, dispatch] = useReducer(MoviesReducer, initialState);

  // Get the trending movie
  const fetchNowPlaying = async () => {
    setLoading();
    const res = await axios.get(`${baseURL}now_playing${ApiString}`);
    dispatch({ type: FETCHING_NOW_PLAYING, payload: res.data.results });
  };

  // Get a single movie
  const fetchMovie = async ({ id }) => {
    setLoading();
    const res = await axios.get(`${baseURL + id + ApiString}`);
    console.log(res);
    dispatch({ type: FETCH_MOVIE, payload: res.data });
  };

  // Get movie videos
  const fetchMovieVideos = async ({ id }) => {
    setLoading();
    const res = await axios.get(`${baseURL + id}/videos${ApiString}`);
    dispatch({ type: FETCH_VIDEOS, payload: res.data.results });
  };

  // Get movie Cast
  const fetchMovieCast = async ({ id }) => {
    setLoading();
    const res = await axios.get(`${baseURL + id}/credits${ApiString}`);
    dispatch({ type: FETCH_CAST, payload: res.data.cast });
  };

  // Get movie reviews
  const fetchMovieReviews = async ({ id }) => {
    setLoading();
    const res = await axios.get(`${baseURL + id}/reviews${ApiString}`);
    dispatch({ type: FETCH_REVIEWS, payload: res.data.results });
  };

  // Get movie poster
  const fetchMoviePosters = async ({ id }) => {
    setLoading();
    const res = await axios.get(`${baseURL + id}/images${ApiString}`);
    dispatch({ type: FETCH_POSTERS, payload: res.data.posters });
  };

  // Get similar movies
  const fetchSimilarMovies = async ({ id }) => {
    setLoading();
    const res = await axios.get(`${baseURL + id}/similar${ApiString}`);
    dispatch({ type: FETCH_SIMILAR, payload: res.data.results });
  };

  const setLoading = () => {
    dispatch({ type: LOADING });
  };

  return (
    <MoviesContext.Provider
      value={{
        fetchNowPlaying,
        fetchMovie,
        fetchMovieVideos,
        fetchMovieCast,
        fetchMovieReviews,
        fetchMoviePosters,
        fetchSimilarMovies,
        nowPlaying: state.nowPlaying,
        movieLoading: state.movieLoading,
        movie: state.movie,
        videos: state.videos,
        cast: state.cast,
        reviews: state.reviews,
        posters: state.posters,
        similarMovies: state.similarMovies
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesState;
