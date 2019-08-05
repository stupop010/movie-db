import React from "react";
import ResultList from "./ResultList";

const Tv = ({ tvListing }) => {
  return (
    <div className="results-container">
      <h1 className="section-title">Airing on Tv Today...</h1>
      <div id="results">
        {tvListing.map(item => {
          return (
            <ResultList
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              name={item.name}
              voteAverage={item.vote_average}
              link={"tv"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tv;
