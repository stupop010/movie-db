import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import MoviePage from "./components/pages/MoviePage";
import TvPage from "./components/pages/TvPage";
import SeasonsPage from "./components/pages/SeasonsPage";
import PersonPage from "./components/pages/PersonPage";
import SearchPage from "./components/pages/SearchPage";

const route = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie/:id" component={MoviePage} />
        <Route exact path="/tv/:id" component={TvPage} />
        <Route exact path="/season/:id/:seasonNumber" component={SeasonsPage} />
        <Route exact path="/person/:id" component={PersonPage} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </Fragment>
  );
};

export default route;
