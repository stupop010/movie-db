import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrollBackground, setScrollBackground] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = e => {
    if (window.scrollY > 50) {
      setScrollBackground("fixed");
    } else {
      setScrollBackground("");
    }
  };
  return (
    <div className="navbar" id={scrollBackground}>
      <div>
        <Link to="/">Movies & Tv</Link>
      </div>
      <div id="left">
        <Link to="/search">
          <span>Search</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
