// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// solution #1
// function pyramid(n) {
//   // calculate mid point of row
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   // iterate through rows
//   for (let row = 0; row < n; row++) {
//     // create empty string
//     let level = '';
//     // iterate through columns;
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     // console log level
//     console.log(level);
//   }
// }

// solution #2
// add row and level arguments with default values
function pyramid(n, row = 0, level = '') {
  // base case
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    // move on to next row
    return pyramid(n, row + 1);
  }
  //calculate midpoint
  const midpoint = Math.floor((2 * n - 1) / 2);
  // define add variable
  let add;

  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  // call pyramid function
  pyramid(n, row, level + add);
}

console.log(pyramid(9));
console.log(pyramid(3));
