// Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer (the 256th day of the year) during a year in the inclusive range from 1700 to 2700.

// From 1700 to 1917, Russia's official calendar was the Julian calendar; since 1919 they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after January 31st was February 14th. This means that in 1918, February 14th was the 32nd day of the year in Russia.

// In both calendar systems, February is the only month with a variable amount of days; it has 29 days during a leap year, and 28 days during all other years. In the Julian calendar, leap years are divisible by 4; in the Gregorian calendar, leap years are either of the following:

// Divisible by 400.
// Divisible by 4 and not divisible by 100.
// Given a year, y, find the date of the 256th day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is .

// For example, the given  = 1984. 1984 is divisible by 4, so it is a leap year. The 256th day of a leap year after 1918 is September 12, so the answer is .

// Function Description

// Complete the dayOfProgrammer function in the editor below. It should return a string representing the date of the 256th day of the year given.

// dayOfProgrammer has the following parameter(s):

// year: an integer
// Input Format

// A single integer denoting year .

// Constraints

// 1700 \le y \le 2700
// Output Format

// Print the full date of Day of the Programmer during year  in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is .

// Sample Input 0

// 2017
// Sample Output 0

// 13.09.2017

// Solution #1
function dayOfProgrammer(year) {
  // define variable for output
  let output;
  // check if year is specifically 1918
  if (year === 1918) {
    // in the year 1918 the 256th day was September 26th
    output = '26.09.1918';
  }
  // check if year is less than 1918 and divisible by 4
  else if (year < 1918 && year % 4 === 0) {
    // it is a leap year in the Julian calendar
    output = `12.09.${year}`;
  }
  // check if year is 1919 or greater and it's a  leap year
  else if (
    year >= 1919 &&
    (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
  ) {
    // it is a leap year in the Gregorian calendar
    output = `12.09.${year}`;
  }
  // for all other years (common years in either calendar)
  else {
    // it is not a leap year
    output = `13.09.${year}`;
  }

  // return output
  return output;
}

// Solution #2 with ternary operators
function dayOfProgrammer(year) {

    // if year is 1918 specifically
    if (year === 1918) {
        return '26.09.1918';
    }

    // solve with ternary operators
    // if year is less than 1918 and divisible by 4 on the Julian Calendar 
    // OR if year is 1919 or greater AND the year is divisible by 400 OR divisible by 4 and not divisible by 100 on the Gregorian Calendar
    // return 12.09.year otherwise return 13.09.year
    return (year < 1918 && year % 4 === 0) || (year >=1919 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))) ? `12.09.${year}` : `13.09.${year}`;
}