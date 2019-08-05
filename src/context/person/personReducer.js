import {
  FETCH_PERSON,
  FETCH_PERSON_PHOTOS,
  FETCH_PERSON_CREDITS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case FETCH_PERSON:
      return {
        ...state,
        person: action.payload
      };
    case FETCH_PERSON_PHOTOS:
      return {
        ...state,
        photos: action.payload
      };
    case FETCH_PERSON_CREDITS:
      return {
        ...state,
        credits: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
