import React, { useReducer } from "react";
import axios from "axios";
import SeasonsContext from "./seasonsContext";
import SeasonsReducer from "./seasonsReducer";

import { FETCH_SEASON, FETCH_SEASON_VIDEO } from "../types";

const SeasonsURL = "https://api.themoviedb.org/3/tv/";
const APIKey = "?api_key=0729def3e1c06a786ecc57e5d3d9a5ac";

const SeasonsState = props => {
  const initialState = {
    season: {},
    videos: []
  };

  const [state, dispatch] = useReducer(SeasonsReducer, initialState);

  // Get Seasons
  const fetchSeason = async (id, seasonNumber) => {
    const res = await axios.get(
      `${SeasonsURL + id}/season/${seasonNumber + APIKey}`
    );
    dispatch({ type: FETCH_SEASON, payload: res.data });
  };

  // Get Season video
  const fetchSeasonVideo = async (id, seasonNumber) => {
    const res = await axios.get(
      `${SeasonsURL + id}/season/${seasonNumber}/videos${APIKey}`
    );
    dispatch({ type: FETCH_SEASON_VIDEO, payload: res.data.results });
  };

  return (
    <SeasonsContext.Provider
      value={{
        fetchSeason,
        fetchSeasonVideo,
        season: state.season,
        videos: state.videos
      }}
    >
      {props.children}
    </SeasonsContext.Provider>
  );
};

export default SeasonsState;
