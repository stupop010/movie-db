import React from "react";
import Truncate from "./Truncate";

const MovieReviews = ({ reviews }) => {
  const review = reviews.map((item, i) => {
    return (
      <div key={i}>
        <h3>
          {item.author}
          <span>says...</span>
        </h3>
        <Truncate text={item.content} />
      </div>
    );
  });

  return (
    <div className="reviews-container">
      <h1>Reviews</h1>
      {review.length > 0 ? review : <div>No reviews yet!</div>}
    </div>
  );
};

export default MovieReviews;
