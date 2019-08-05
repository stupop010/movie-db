import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MoviesState from "./context/movies/moviesState";
import TvState from "./context/tv/tvState";
import SeasonsState from "./context/seasons/seasonsState";
import PersonState from "./context/person/personState";

import HomePage from "./components/pages/HomePage";
import MoviePage from "./components/pages/MoviePage";
import TvPage from "./components/pages/TvPage";
import SeasonsPage from "./components/pages/SeasonsPage";
import PersonPage from "./components/pages/PersonPage";
import SearchPage from "./components/pages/SearchPage";
import Navbar from "./components/Navbar";

import "./App.scss";

function App() {
  return (
    <MoviesState>
      <SeasonsState>
        <TvState>
          <PersonState>
            <div className="App">
              <Router>
                <Navbar />
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/movie/:id" component={MoviePage} />
                  <Route exact path="/tv/:id" component={TvPage} />
                  <Route
                    exact
                    path="/season/:id/:seasonNumber"
                    component={SeasonsPage}
                  />
                  <Route exact path="/person/:id" component={PersonPage} />
                  <Route exact path="/search" component={SearchPage} />
                </Switch>
              </Router>
            </div>
          </PersonState>
        </TvState>
      </SeasonsState>
    </MoviesState>
  );
}

export default App;
