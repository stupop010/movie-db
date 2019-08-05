import React, { Fragment } from "react";

const SeasonHero = ({ picture }) => {
  return (
    <Fragment>
      {picture ? (
        <div
          className="movie-hero"
          style={{
            backgroundImage: `linear-gradient(
            0deg,
            rgba(0, 0, 0, 1) 5%,
            rgba(0, 0, 0, 0.1) 100%
            ),url('https://image.tmdb.org/t/p/original${picture}')`
          }}
        />
      ) : null}
    </Fragment>
  );
};

export default SeasonHero;
