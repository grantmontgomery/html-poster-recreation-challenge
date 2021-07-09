const dates = [
  "Oct 9, 2009",
  "Sep 21, 2007",
  "Jan 15, 2008",
  "Dec 31, 2008",
  "Jan 1, 2009",
  "Sep 22, 2007",
];

const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

const dateScore = (dateString) => {
  const destructDateString = dateString.split(" ");
  const month = destructDateString[0];

  //the task didn't mention the months having different cases. I implemented a toLowerCase step to make sure that the input wasn't case sensitive.
  const monthIndex = months.indexOf(month.toLowerCase());
  const days = parseInt(destructDateString[1].replace(",", ""));
  const year = parseInt(destructDateString[2]);

  //year score is the year multiplied by the number of months in a year and the maximum number of days in a month
  const yearScore = year * 12 * 31;

  //month score is the month index multiplied by the maximum number of days in a month
  const monthScore = monthIndex * 31;

  return yearScore + monthScore + days;
};

const sortDates = (dateStrings) => {
  return dateStrings.sort((a, b) => dateScore(b) - dateScore(a));
};

console.log(sortDates(dates));
