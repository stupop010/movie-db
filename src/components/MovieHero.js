import React, { Fragment } from "react";

const movieHero = ({ hero }) => {
  return (
    <Fragment>
      {hero ? (
        <div
          className="movie-hero"
          style={{
            backgroundImage: `linear-gradient(
            0deg,
            rgba(0, 0, 0, 1) 5%,
            rgba(0, 0, 0, 0.1) 100%
            ),url('https://image.tmdb.org/t/p/original${hero.backdrop_path}')`
          }}
        />
      ) : null}
    </Fragment>
  );
};

export default movieHero;
