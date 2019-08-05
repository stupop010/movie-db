import React, { useState } from "react";
import { truncate } from "lodash";

const Truncate = ({ text }) => {
  const [openAll, setOpenAll] = useState(false);
  return (
    <div className="review-text">
      {openAll ? text : truncate(text, { length: 300 })}
      <button
        className="read-more"
        onClick={() => {
          setOpenAll(!openAll);
        }}
      >
        {openAll ? "Read less" : "Read More"}
      </button>
    </div>
  );
};

export default Truncate;
