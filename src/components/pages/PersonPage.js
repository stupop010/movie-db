import React, { useEffect, useContext } from "react";
import SeasonHero from "../SeasonHero";

import PersonContext from "../../context/person/personContext";
import Poster from "../Poster";
import PersonInfo from "../PersonInfo";
import AllPosters from "../AllPosters";
import Similar from "../Similar";

const PersonPage = ({ match }) => {
  const personContext = useContext(PersonContext);
  const {
    fetchPerson,
    fetchPersonPhotos,
    fetchPersonCredits,
    credits,
    person,
    photos
  } = personContext;

  useEffect(() => {
    const { id } = match.params;
    fetchPerson(id);
    fetchPersonPhotos(id);
    fetchPersonCredits(id);
    // eslint-disable-next-line
  }, []);

  const compare = (a, b) => {
    if (a.vote_average > b.vote_average) return -1;
    if (a.vote_average < b.vote_average) return 1;
    return 0;
  };

  return (
    <div className="container">
      <SeasonHero picture={person.profile_path} />
      <div className="info-container">
        <div className="content">
          <Poster poster={person.profile_path} />
          <div className="movie-info">
            {person && <PersonInfo data={person} />}
            <AllPosters posters={photos} />
            <Similar data={credits.sort(compare)} title={"Appears in"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonPage;
