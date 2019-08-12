import React from "react";
import ResultList from "./ResultList";

const SearchResult = ({
  data: { results, page, total_results, total_pages },
  onClickForward,
  onClickPrevious
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
      <div className="sr-container">
        {resultsRender()}
        <div className="sr-buttons">
          {page > 1 && (
            <button className="previous sr-button" onClick={onClickPrevious}>
              Previous Page
            </button>
          )}
          {page < total_pages && (
            <button className="next sr-button" onClick={onClickForward}>
              Next Page
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
