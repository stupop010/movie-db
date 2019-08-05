import React, { useState } from "react";

const AllPosters = ({ posters }) => {
  const [showAll, setShowAll] = useState(false);
  const limit = 4;
  const button = () => {
    if (posters <= limit) {
      return null;
    } else {
      return (
        <button className="poster-button" onClick={() => setShowAll(!showAll)}>
          {!showAll ? `View All ${posters.length} photos` : `Show Less`}
        </button>
      );
    }
  };
  return (
    <div className="poster-container">
      <h1>Posters & Photos</h1>
      <div className="posters">
        {posters
          ? posters.map((poster, i) => {
              if (i >= limit && !showAll) return null;
              return (
                <div className="poster-width" key={i}>
                  <div
                    className="poster"
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/w342${
                        poster.file_path
                      })`
                    }}
                  />
                </div>
              );
            })
          : null}
      </div>
      {button()}
    </div>
  );
};

export default AllPosters;
