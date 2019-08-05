import React from "react";
import { getYearRelease } from "../utils/getYearRelease";

const SeasonDetails = ({ data }) => {
  if (!data.episodes) return null;
  return (
    <ul>
      <li>{getYearRelease(data.air_date)}</li>
      <li>{data.episodes.length} Episodes</li>
    </ul>
  );
};

export default SeasonDetails;
