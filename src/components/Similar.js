import React, { useState } from "react";
import ResultList from "./ResultList";

const Similar = ({ data, title, type }) => {
  const [showAll, setShowAll] = useState(false);
  const limit = 9;

  const button = () => {
    if (data.length <= limit) {
      return null;
    } else {
      return (
        <button className="movie-button" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : `View all ${data.length}`}
        </button>
      );
    }
  };

  return (
    <div className="similar-container">
      <h1>{title}</h1>
      <div className="similar-flex">
        {data
          ? data.map((item, i) => {
              if (i >= limit && !showAll) return null;
              return (
                <ResultList
                  key={i}
                  id={item.id}
                  poster={item.poster_path}
                  name={item.title || item.name}
                  year={item.release_date}
                  link={type || item.media_type}
                  voteAverage={item.vote_average}
                  classname={"poster poster-m"}
                />
              );
            })
          : null}
      </div>
      {button()}
    </div>
  );
};

export default Similar;
