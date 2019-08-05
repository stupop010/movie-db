import React, { useEffect, useContext } from "react";
import MoviesContext from "../../context/movies/moviesContext";
import TvContext from "../../context/tv/tvContext";
import Footer from "../Footer";
import HomeHero from "../HomeHero";
import Cinemas from "../Cinemas";
import Tv from "../Tv";

const HomePage = () => {
  const moviesContext = useContext(MoviesContext);
  const tvContext = useContext(TvContext);
  const { fetchAiringTv, tvListing } = tvContext;
  const { fetchNowPlaying, nowPlaying } = moviesContext;

  useEffect(() => {
    fetchNowPlaying();
    fetchAiringTv();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {nowPlaying ? (
        <div className="container">
          <HomeHero heroSection={nowPlaying[0]} />
          <div className="black">
            <Cinemas whatsOn={nowPlaying} />
            <Tv tvListing={tvListing} />
            <Footer />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HomePage;
