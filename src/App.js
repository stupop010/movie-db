import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Route from "./route";
import MoviesState from "./context/movies/moviesState";
import TvState from "./context/tv/tvState";
import SeasonsState from "./context/seasons/seasonsState";
import PersonState from "./context/person/personState";
import SearchState from "./context/search/searchState";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.scss";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <MoviesState>
      <SeasonsState>
        <TvState>
          <PersonState>
            <SearchState>
              <div className="App">
                <Router>
                  <ScrollToTop>
                    <Navbar />
                    <div style={{ height: "100%" }}>
                      <Route />
                    </div>
                    <Footer />
                  </ScrollToTop>
                </Router>
              </div>
            </SearchState>
          </PersonState>
        </TvState>
      </SeasonsState>
    </MoviesState>
  );
}

export default App;
