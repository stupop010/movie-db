import React from "react";

import Truncate from "./Truncate";

const PersonInfo = ({ data }) => {
  if (!data.name) return null;
  return (
    <div className="person-data">
      <h1 className="title">{data.name}</h1>
      {data.also_known_as.length > 0 && (
        <h3 className="person-title">
          Also known as {data.also_known_as.join(", ")}
        </h3>
      )}
      <Truncate text={data.biography} />
    </div>
  );
};

export default PersonInfo;
