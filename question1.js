//Insert date array in the command line

//example command: node question1.js 'Oct 9, 2008' 'Sep 3, 2009' 'Nov 3, 2009'

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

const calculateDateScore = (dateString) => {
  const destructDateString = dateString.split(" ");
  const month = destructDateString[0];

  //the task didn't mention the months having different cases. I implemented a toLowerCase step to make sure that the input didn't need to be case sensitive.
  const monthIndex = months.indexOf(month.toLowerCase());
  if (monthIndex == -1) {
    const currentIndex = process.argv.indexOf(dateString);
    throw new Error(
      `Month is mispelled on index ${currentIndex - 2} of argument array.`
    );
  }
  const days = parseInt(destructDateString[1].replace(",", ""));
  const year = parseInt(destructDateString[2]);

  //year score is the year multiplied by the number of months in a year and the maximum number of days in a month
  const yearScore = year * 12 * 31;

  //month score is the month index multiplied by the maximum number of days in a month
  const monthScore = monthIndex * 31;

  return yearScore + monthScore + days;
};

const sortDates = () => {
  if (!process.argv[2]) throw new Error("No array argument present.");
  let indexCount = 2;
  const argumentArray = [];
  while (process.argv[indexCount]) {
    argumentArray.push(process.argv[indexCount]);
    indexCount++;
  }
  return argumentArray.sort(
    (a, b) => calculateDateScore(b) - calculateDateScore(a)
  );
};

console.log(sortDates());
