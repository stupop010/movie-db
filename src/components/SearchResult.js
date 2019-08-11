import React from "react";
import ResultList from "./ResultList";

const SearchResult = ({
  data: { results, page, total_results, total_pages }
}) => {
  const resultsRender = () => {
    if (results) {
      return results.map((item, i) => (
        <ResultList
          key={i}
          name={item.title || item.name}
          poster={item.poster_path}
          voteAverage={item.vote_average}
          link={item.media_type}
          id={item.id}
        />
      ));
    }
    return null;
  };
  return (
    <div>
      <h3>Total results: {total_results || 0}</h3>
      <div className="sr-container">{resultsRender()}</div>
    </div>
  );
};

export default SearchResult;
