import React, { useState, useEffect } from "react";

const Poster = ({ poster }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const handleResize = () => {
    if (window.innerWidth <= 600) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  if (!show) return null;

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
