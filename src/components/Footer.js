import React from "react";
import tmdb from "../assets/logo/tmdb.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <a href="www.stuart-doney.com">Stuart Doney &copy; 2019</a>
        <div className="powered-by">
          <a
            href="https://themoviedb.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tmdb} alt="powered-by" className="logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
