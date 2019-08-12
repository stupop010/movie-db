import React, { useEffect, useContext } from "react";
import MoviesContext from "../../context/movies/moviesContext";

import MovieHero from "../MovieHero";
import Cast from "../Cast";
import MovieReviews from "../MovieReviews";
import AllPosters from "../AllPosters";
import Poster from "../Poster";
import Info from "../Info";
import Similar from "../Similar";
import MovieDetails from "../MovieDetails";

const MoviePage = ({ match }) => {
  const moviesContext = useContext(MoviesContext);
  const {
    fetchMovie,
    fetchMovieVideos,
    fetchMovieCast,
    fetchMovieReviews,
    fetchMoviePosters,
    fetchSimilarMovies,
    movie,
    videos,
    cast,
    reviews,
    posters,
    similarMovies
  } = moviesContext;

  useEffect(() => {
    const id = match.params;
    fetchMovie(id);
    fetchMovieVideos(id);
    fetchMovieCast(id);
    fetchMovieReviews(id);
    fetchMoviePosters(id);
    fetchSimilarMovies(id);
    // eslint-disable-next-line
  }, [match.params.id]);
  
  return (
    <div className="container">
      <MovieHero hero={movie} />
      <div className="info-container">
        {movie ? (
          <div className="content">
            <Poster poster={movie.poster_path} />
            <div className="movie-info">
              <Info
                data={movie}
                videos={videos}
                list={
                  <MovieDetails
                    runtime={movie.runtime}
                    date={movie.release_date}
                  />
                }
              />
              <Cast cast={cast} />
              <MovieReviews reviews={reviews} />
              <AllPosters posters={posters} />
              <Similar
                data={similarMovies}
                title={"Similar Movies"}
                type={"Movie"}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MoviePage;
