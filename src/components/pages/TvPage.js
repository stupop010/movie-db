import React, { useEffect, useContext } from "react";
import TvContext from "../../context/tv/tvContext";

import MovieHero from "../MovieHero";
import Poster from "../Poster";
import Info from "../Info";
import TvSeasons from "../TvSeasons";
import Cast from "../Cast";
import Similar from "../Similar";

const TvPage = ({ match }) => {
  const tvContext = useContext(TvContext);
  const {
    fetchTv,
    fetchTvVideos,
    fetchTvCast,
    fetchTvRecommend,
    cast,
    tv,
    videos,
    recommended
  } = tvContext;

  useEffect(() => {
    const { id } = match.params;
    fetchTvVideos(id);
    fetchTv(id);
    fetchTvCast(id);
    fetchTvRecommend(id);
    // eslint-disable-next-line
  }, [match.params.id]);

  return (
    <div className="container">
      <MovieHero hero={tv} />
      <div className="info-container">
        {tv ? (
          <div className="content">
            <Poster poster={tv.poster_path} />
            <div className="movie-info">
              <Info data={tv} videos={videos} />
              <TvSeasons seasons={tv.seasons} tvId={tv.id} title={"Seasons"} />
              <Cast cast={cast} />
              <Similar data={recommended} title={"Recommended"} type={"Tv"} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TvPage;
