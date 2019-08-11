import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { getYearRelease } from "../utils/getYearRelease";
import { getStarColor } from "../utils/getStarColor";

const renderInfo = (name, year, voteAverage) => {
  return (
    <div className="info">
      <div className="title">{name}</div>
      <p className="release-date">{getYearRelease(year)}</p>
      <div>
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: `${getStarColor(Number(voteAverage))}` }}
        />
        <span className="vote">{voteAverage}</span>
      </div>
    </div>
  );
};

const ResultList = ({
  poster,
  name,
  year,
  link,
  id,
  voteAverage = null,
  classname
}) => {
  return (
    <Link
      to={`/${link.toLowerCase()}/${id}`}
      className={classname ? classname : "poster"}
    >
      {poster ? (
        <div
          className="poster-content"
          style={{
            backgroundImage: `linear-gradient(
                    0deg,
                    rgba(0, 0, 0, 0.9) 7%,
                    rgba(0, 0, 0, 0.1) 100%
                    ),url('https://image.tmdb.org/t/p/w500${poster}')`
          }}
        >
          {renderInfo(name, year, voteAverage)}
        </div>
      ) : (
        <div className="light-grey poster-content">
          {renderInfo(name, year, voteAverage)}
        </div>
      )}
    </Link>
  );
};

export default ResultList;

///ipPiP5YeYpHVdgFZ1jdgZLcvI47.jpg
// https://image.tmdb.org/t/p/w500/ipPiP5YeYpHVdgFZ1jdgZLcvI47.jpg
