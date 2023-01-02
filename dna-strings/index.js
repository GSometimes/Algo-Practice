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

const dnaTransform = (string) => {
  let output = '';

  for (const el of string) {
    if (el === 'A') {
      output += 'T';
    } else if (el === 'T') {
      output += 'A';
    } else if (el === 'C') {
      output += 'G';
    } else if (el === 'G') {
      output += 'C';
    }
  }

  return output;
};

console.log(dnaTransform(dnaString)); // TAACG
