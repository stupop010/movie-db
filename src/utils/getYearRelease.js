export const getYearRelease = date => {
  if (date) {
    return date.split("-")[0];
  } else {
    return null;
  }
};
