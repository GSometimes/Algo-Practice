// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // create empty array 'results
  const results = [];

  // iterate from 0 to n
  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  // create counter variable
  let counter = 1;
  // write variables for starting rows and columns
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  // while start column <= end column AND start row <= end row
  while (startColumn <= endColumn && startRow <= endRow) {
    // loop from start column to end column - top rows
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    // increment start row
    startRow++;

    // loop from start row to end row - right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    // decrement end column
    endColumn--;

    // loop from end column to start column - bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    // decrement end row
    endRow--;

    // loop from end row to start row
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }

    // increment start column
    startColumn++;
  }

  // return results
  return results;
}

console.log(matrix(4));
