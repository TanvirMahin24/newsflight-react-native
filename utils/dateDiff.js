export const dateDiff = (date1, date2) => {
  const diffTime = Math.abs(date2 - date1);
  const diffHour = Math.ceil(diffTime / (1000 * 60 * 60));

  return diffHour;
};
