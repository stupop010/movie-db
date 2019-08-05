import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { getYearRelease } from "../utils/getYearRelease";
import { getStarColor } from "../utils/getStarColor";

const ResultList = ({
  poster,
  name,
  year,
  link,
  id,
  voteAverage,
  classname
}) => {
  return (
    <a
      href={`/${link.toLowerCase()}/${id}`}
      className={classname ? classname : "poster"}
    >
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
      </div>
    </a>
  );
};

export default ResultList;
