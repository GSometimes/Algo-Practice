// Directions

// Write a program to count the number of days between two dates.

// The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.

// Example

// Input: date1 = "2019-06-29", date2 = "2019-06-30"
// Output: 1

// Input: date1 = "2020-01-15", date2 = "2019-12-31"
// Output: 15

function daysBetweenDates(date1, date2) {
  // Date constructor represents an integer value of milliseconds
  // Define variable with milliseconds in a day
  const milliseconds = 1000 * 60 * 60 * 24;

  // Calculate the difference in days between date1 and date 2 and divide by milliseconds
  // Use Math.abs to return "absolute value" of days to account for negative number
  return Math.abs((new Date(date1) - new Date(date2)) / milliseconds);
}

console.log(daysBetweenDates('2019-06-29', '2019-06-30')); // 1
console.log(daysBetweenDates('2020-01-15', '2019-12-31')); // 15
