import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cast = ({ cast }) => {
  const limit = 8;
  const [showAll, setShowAll] = useState(false);

  const button = () => {
    if (cast.length <= 8) {
      return null;
    } else {
      return (
        <button className="person-button" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show less" : `view all ${cast.length} cast`}
        </button>
      );
    }
  };

  return (
    <div className="movie-cast">
      <h1>Cast</h1>
      <div className="flex">
        {cast
          ? cast.map((item, i) => {
              if (i >= limit && !showAll) return null;
              return (
                <div className="person-container" key={i}>
                  <Link to={`/person/${item.id}`}>
                    <div className="flex">
                      <img
                        className="person-img"
                        alt={`${item.name}`}
                        src={`https://image.tmdb.org/t/p/w185${
                          item.profile_path
                        }`}
                      />
                      <div className="person-info">
                        <h3>{item.name}</h3>
                        <p>{item.character}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          : null}
      </div>
      {button()}
    </div>
  );
};

export default Cast;
