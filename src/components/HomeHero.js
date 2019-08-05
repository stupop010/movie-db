import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = ({ heroSection }) => {
  return (
    <Fragment>
      {heroSection ? (
        <div
          id="hero"
          style={{
            backgroundImage: `linear-gradient(
              0deg,
              rgba(0, 0, 0, 1) 5%,
              rgba(0, 0, 0, 0.1) 100%
              ),url('https://image.tmdb.org/t/p/original${
                heroSection.backdrop_path
              }')`
          }}
        >
          <div className="hero-container">
            <div className="hero-content">
              <h1>{heroSection.title}</h1>
              <p>{heroSection.overview}</p>
              <Link to={`/movie/${heroSection.id}`}>
                <button className="hero-button">
                  <span> Check it out</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default Hero;
