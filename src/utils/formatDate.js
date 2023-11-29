export const formatDate = (date) => {
  const dateObj = new Date(date);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    dateObj
  );
  return formattedDate;
};
