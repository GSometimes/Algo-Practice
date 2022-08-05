// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// // solution #1
// function steps(n) {
//   // iterate through rows
//   for (let row = 0; row < n; row++) {
//     // define empty string 'stair'
//     let stair = '';

//     // iterate through columns
//     for (let column = 0; column < n; column++) {
//       // if current column is equal to or less
//       // than row add a '#'
//       // else add a space " "
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     // console log stair
//     console.log(stair);
//   }
// }

// solution #2
// add row argument with default value of 0
// add stair argument with empty string value
function steps(n, row = 0, stair = '') {
  // write base case
  // if row === n then we have hit the base case/the end
  if (n === row) {
    return;
  }

  // if n === stair.length then we are at the end of a row
  if (n === stair.length) {
    //console log stair
    console.log(stair);
    // call steps function with new argument
    return steps(n, row + 1);
  }

  // if the length of stair string is less than or equal to the row
  // add a '#' otherwise add a space ' '
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  // call steps function
  steps(n, row, stair);
}

console.log(steps(3));
console.log(steps(5));
