import React from "react";

const SeasonEpisodes = ({ episodes }) => {
  if (!episodes) return null;
  return (
    <div className="episodes-container">
      <h1>Episodes</h1>
      {episodes.map((item, i) => (
        <div className="epi-result" key={i}>
          {item.still_path ? (
            <div
              className="epi-poster"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w342${
                  item.still_path
                })`
              }}
            />
          ) : (
            <div className="backup" />
          )}
          <div className="epi-info">
            <h3>
              {item.episode_number}. {item.name}
            </h3>
            <p>{item.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeasonEpisodes;
