import React from "react";

import { getYearRelease } from "../utils/getYearRelease";

const MovieDetails = ({ runtime, date }) => {
  return (
    <ul>
      <li>{runtime} mins</li>
      <li>{getYearRelease(date)}</li>
    </ul>
  );
};

export default MovieDetails;
