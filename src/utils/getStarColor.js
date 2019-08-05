export const getStarColor = vote => {
  if (vote >= 7) {
    return "green";
  } else if (vote <= 4) {
    return "red";
  } else {
    return "orange";
  }
};
