import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getYearRelease } from "../utils/getYearRelease";

const TvSeasons = ({ seasons, tvId, title, seasonNumber }) => {
  const [showAll, setShowAll] = useState(false);

  if (!seasons || !tvId) return null;

  let filterData;
  if (seasonNumber) {
    const removedSeason = seasons.filter(
      item => item.season_number !== Number(seasonNumber)
    );
    filterData = removedSeason.filter(item => item.season_number !== 0);
  } else {
    filterData = seasons.filter(item => item.season_number !== 0);
  }

  const button = () => {
    if (filterData.length <= 4) {
      return null;
    } else {
      return (
        <button className="movie-button" onClick={() => setShowAll(!showAll)}>
          {!showAll ? `Show all ${filterData.length} seasons` : "Show less"}
        </button>
      );
    }
  };

  return (
    <div className="seasons-container">
      <h1 className="title">{title}</h1>
      <div className="seasons">
        {filterData.reverse().map((item, i) => {
          if (i >= 4 && !showAll) return null;
          return (
            <div key={i} className="season">
              <Link to={`/season/${tvId}/${item.season_number}`}>
                <div className="seasons-content">
                  <div
                    className="seasons-poster"
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/w185${
                        item.poster_path
                      }`
                    }}
                  />
                  <div className="seasons-info">
                    <h3>{item.name}</h3>
                    <h4>{getYearRelease(item.air_date)}</h4>
                    <p>{item.episode_count} episodes</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {button()}
    </div>
  );
};

export default TvSeasons;
