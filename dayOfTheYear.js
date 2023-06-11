// DESCRIPTION:
// Work out what number day of the year it is.

// toDayOfYear([1, 1, 2000]) => 1
// The argument passed into the function is an array with the format [D, M, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.

// Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

// The year can be evenly divided by 4;
// If the year can be evenly divided by 100, it is NOT a leap year, unless;
// The year is also evenly divisible by 400. Then it is a leap year.


let arr = [
  {date: 0},
  {month:00}, 
  {year: 0000}
]

function toDayOfYear(arr) {
  const day = arr[0];
  const month = arr[1] - 1;
  const year = arr[2];

  const date = new Date(year, month, day);
  const beginingOfYear = new Date(year, 0, 1); 
  const getDay = date - beginingOfYear;

  const dayOfTheYear = Math.floor(getDay / (1000 * 60 * 60 * 24)) + 1;

  return dayOfTheYear;
}

console.log(2,05,1982)