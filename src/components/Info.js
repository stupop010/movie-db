import React, { Fragment } from "react";

import { getStarColor } from "../utils/getStarColor";

const info = ({ data, videos, list }) => {
  return (
    <Fragment>
      <h1 className="title">{data.title ? data.title : data.name}</h1>
      {list}
      <div className="vote">
        {data.vote_average ? (
          <h2>
            <span
              className="fs-2"
              style={{
                color: `${getStarColor(Number(data.vote_average))}`
              }}
            >
              {data.vote_average}
            </span>
            / 10
            <span className="vote-count">{`(${data.vote_count} votes)`}</span>
          </h2>
        ) : null}
        <div>
          <ul className="genres-info">
            {data.genres
              ? data.genres.map(item => <li key={item.id}>{item.name}</li>)
              : null}
          </ul>
        </div>
        <p className="movie-overview">{data.overview}</p>
      </div>
      {videos[0] ? (
        <div>
          <a href={`https://www.youtube.com/watch?v=${videos[0].key}`}>
            <button className="trailer-button">Trailer</button>
          </a>
        </div>
      ) : null}
    </Fragment>
  );
};

export default info;
