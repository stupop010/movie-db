import React from "react";

const Poster = ({ poster }) => {
  return (
    <div
      className="movie-poster"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w500/${poster}")`
      }}
    />
  );
};

export default Poster;
