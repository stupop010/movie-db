import React from "react";
import ResultList from "./ResultList";

const Cinemas = ({ whatsOn }) => {
  return (
    <div className="results-container">
      <h1 className="section-title">In Cinemas</h1>
      <div id="results">
        {whatsOn.map(item => {
          return (
            <ResultList
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              name={item.title}
              year={item.release_date}
              voteAverage={item.vote_average}
              link={"movie"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cinemas;
