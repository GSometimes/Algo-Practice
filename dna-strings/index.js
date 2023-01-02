//   DNA Strings
//   In DNA strings, symbols "A" and "T" are complements of each other, as are "C" and "G". Write a function called dnaTransform that takes in a DNA string and returns a string that represents it's compliment.

//   Input: "ATTGC"
//   Output: "TAACG"

// DNA STRING COMPLEMENTS
// 'T' is complement of 'A'
// 'A' is complement of 'T'
// 'C' is complement of 'G'
// 'G' is complement of 'C'

// YOUR PSEUDOCODE GOES HERE
// define empty output string
// iterate over input string
// add complement of current symbol
// to output string
// return output string

let dnaString = 'ATTGC';

// const dnaTransform = (string) => {
//   // YOUR CODE GOES HERE
//   let output = '';

//   for (const el of string) {
//     if (el === 'A') {
//       output += 'T'
//     } else if (el === 'T') {
//       output += 'A'
//     } else if (el === 'C') {
//       output += 'G'
//     } else if (el === 'G') {
//       output += 'C'
//     }
//   }

//   return output;
// }

// YOUR PSEUDOCODE GOES HERE
// define empty output string
// iterate over input string
// add complement to output string
// return output

const dnaTransform = (string) => {
  // YOUR CODE GOES HERE
  let output = '';

  const complements = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };

  const split = string.split('');

  for (const el of split) {
    // console.log('el of string', el);
    // output.push([el, pairs[el]]);
    if (el === 'A') {
      output += complements[el];
    }
    if (el === 'T') {
      output += complements[el];
    }
    if (el === 'C') {
      output += complements[el];
    }
    if (el === 'G') {
      output += complements[el];
    }
  }

  return output;
};

console.log(dnaTransform(dnaString)); // TAACG
