import React, { useEffect, useContext } from "react";
import SeasonsContext from "../../context/seasons/seasonsContext";
import SeasonHero from "../SeasonHero";
import TvContext from "../../context/tv/tvContext";

import Poster from "../Poster";
import Info from "../Info";
import SeasonDetails from "../SeasonDetails";
import SeasonEpisodes from "../SeasonEpisodes";
import TvSeasons from "../TvSeasons";

const SeasonsPage = ({ match }) => {
  const seasonsContext = useContext(SeasonsContext);
  const { fetchSeason, fetchSeasonVideo, videos, season } = seasonsContext;
  const tvContext = useContext(TvContext);
  const { tv, fetchTv } = tvContext;

  useEffect(() => {
    const { id, seasonNumber } = match.params;
    fetchSeason(id, seasonNumber);
    fetchSeasonVideo(id, seasonNumber);
    fetchTv(id);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <SeasonHero picture={getHeroPicture(season)} />
      <div className="info-container">
        <div className="content">
          <Poster poster={season.poster_path} />
          <div className="movie-info">
            <Info
              data={season}
              videos={videos}
              list={<SeasonDetails data={season} />}
            />
            <SeasonEpisodes episodes={season.episodes} />
            <TvSeasons
              title={"Other Seasons"}
              seasons={tv.seasons}
              tvId={match.params.id}
              seasonNumber={match.params.seasonNumber}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonsPage;

const getHeroPicture = season => {
  const getRandom = length => {
    return Math.floor(Math.random() * length);
  };

  const getImageFromEpisodes = episodes => {
    const episode = episodes[getRandom(episodes.length)];
    return episode.still_path;
  };

  if (season.episodes && season.episodes.length > 0) {
    return getImageFromEpisodes(season.episodes);
  }
};
