// Loop the Loop (and Pull)
// Make a function that returns the greatest sum of a row, column or diagonal from a two dimensional array

// Make a function that takes one argument, a two dimensional array, where all the arrays are the same length, and returns the greatest sum of the numbers by row, column and diagonal.

const arr = [
  [10, 20, 30],
  [40, 50, 60],
  [70, -80, 90],
];

function greatestSum(arr) {
  let row = 0;
  let column = 0;
  let diagonalOne = 0;
  let diagonalTwo = 0;

  for (let i = 0; i < arr.length; i++) {
    let rowSum = 0;
    let columnSum = 0;

    // getting the diagonals
    diagonalOne += arr[i][i];
    diagonalTwo += arr[i][arr[i].length - 1 - i];

    // getting row and column one by one.
    for (let j = 0; j < arr[i].length; j++) {
      rowSum += arr[i][j];
      columnSum += arr[j][i];
    }

    // update the biggest the column and row if necessary
    if (rowSum > row) row = rowSum;
    if (columnSum > column) column = columnSum;
  }

  return Math.max(column, row, diagonalOne, diagonalTwo);
}

console.log(greatestSum(arr));
// output: 180

// the last column (30 + 60 + 90)
