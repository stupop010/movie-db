import React, { useReducer } from "react";
import axios from "axios";
import TvContext from "./tvContext";
import TvReducer from "./tvReducer";

import {
  FETCHING_AIRING_TV,
  FETCH_TV,
  FETCH_TV_VIDEOS,
  FETCH_TV_CAST,
  FETCH_TV_RECOMMEND,
  FETCH_TV_POSTERS,
  LOADING
} from "../types";

const TvURL = "https://api.themoviedb.org/3/tv/";
const APIKey = "?api_key=0729def3e1c06a786ecc57e5d3d9a5ac";

const TvState = props => {
  const initialState = {
    tvLoading: false,
    tvListing: [],
    tv: {},
    videos: [],
    cast: [],
    posters: [],
    recommended: []
  };

  const [state, dispatch] = useReducer(TvReducer, initialState);

  // Get Airing tv today
  const fetchAiringTv = async () => {
    setLoading();
    const res = await axios.get(`${TvURL}airing_today${APIKey}`);
    const data = res.data.results;
    dispatch({ type: FETCHING_AIRING_TV, payload: data });
  };

  // Get Tv show
  const fetchTv = async id => {
    setLoading();
    console.log("callsed");
    console.log(id);
    const res = await axios.get(`${TvURL + id + APIKey}`);
    console.log(res);
    dispatch({ type: FETCH_TV, payload: res.data });
  };

  // Get Tv videos
  const fetchTvVideos = async id => {
    setLoading();
    const res = await axios.get(`${TvURL + id}/videos${APIKey}`);
    dispatch({ type: FETCH_TV_VIDEOS, payload: res.data.results });
  };

  // Get Tv cast
  const fetchTvCast = async id => {
    setLoading();
    const res = await axios.get(`${TvURL + id}/credits${APIKey}`);
    dispatch({ type: FETCH_TV_CAST, payload: res.data.cast });
  };

  // Get Tv poster
  // ToDo: Api not response back with data
  //       data was empty.

  const fetchTvPosters = async id => {
    const res = await axios.get(`${TvURL + id}/images${APIKey}`);
    console.log(res);
  };

  // Get recommended tv show
  const fetchTvRecommend = async id => {
    setLoading();
    const res = await axios.get(`${TvURL + id}/recommendations${APIKey}`);
    dispatch({ type: FETCH_TV_RECOMMEND, payload: res.data.results });
  };

  const setLoading = () => {
    dispatch({ type: LOADING });
  };

  return (
    <TvContext.Provider
      value={{
        fetchAiringTv,
        fetchTv,
        fetchTvVideos,
        fetchTvCast,
        fetchTvPosters,
        fetchTvRecommend,
        tvLoading: state.tvLoading,
        tvListing: state.tvListing,
        tv: state.tv,
        videos: state.videos,
        cast: state.cast,
        poster: state.posters,
        recommended: state.recommended
      }}
    >
      {props.children}
    </TvContext.Provider>
  );
};

export default TvState;
