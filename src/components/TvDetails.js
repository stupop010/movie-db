import React from "react";
import { getYearRelease } from "../utils/getYearRelease";

const TvDetails = ({ data }) => {
  return (
    <ul>
      <li>{getYearRelease(data.first_air_date)}</li>
      <li>{data.number_of_seasons} Seasons</li>
      <li>{data.number_of_episodes} Episodes</li>
    </ul>
  );
};

export default TvDetails;
