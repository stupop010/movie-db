import React, { useReducer } from "react";
import axios from "axios";
import PersonContext from "./personContext";
import PersonReducer from "./personReducer";

import {
  FETCH_PERSON,
  FETCH_PERSON_PHOTOS,
  FETCH_PERSON_CREDITS
} from "../types";
import { async } from "q";

const PersonURL = "https://api.themoviedb.org/3/person/";
const APIKey = "?api_key=0729def3e1c06a786ecc57e5d3d9a5ac";

const PersonState = props => {
  const initialState = {
    person: {},
    photos: [],
    credits: []
  };

  const [state, dispatch] = useReducer(PersonReducer, initialState);

  // Get Person
  const fetchPerson = async id => {
    const res = await axios.get(`${PersonURL + id + APIKey}`);
    dispatch({ type: FETCH_PERSON, payload: res.data });
  };

  // Get Person Photos
  const fetchPersonPhotos = async id => {
    const res = await axios.get(`${PersonURL + id}/images${APIKey}`);
    dispatch({ type: FETCH_PERSON_PHOTOS, payload: res.data.profiles });
  };

  // Get Person Credits
  const fetchPersonCredits = async id => {
    const res = await axios.get(`${PersonURL + id}/combined_credits${APIKey}`);
    dispatch({ type: FETCH_PERSON_CREDITS, payload: res.data.cast });
  };

  return (
    <PersonContext.Provider
      value={{
        fetchPerson,
        fetchPersonPhotos,
        fetchPersonCredits,
        person: state.person,
        photos: state.photos,
        credits: state.credits
      }}
    >
      {props.children}
    </PersonContext.Provider>
  );
};

export default PersonState;
