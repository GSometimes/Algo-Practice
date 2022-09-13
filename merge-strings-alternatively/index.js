// Direections

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

function mergeAlternatively(word1, word2) {
  // define result variable as empty string
  let result = '';
  // define variable with length of longest string to
  // determine how many times you'll iterate
  let length = Math.max(word1.length, word2.length);
  // write a for loop to iterate over strings "length" times
  for (let i = 0; i < length; i++) {
    // if i is less than the length of word1 increment
    // result string by letter at current index
    if (i < word1.length) {
      result += word1[i];
    }
    // if i is less than the length of word2 increment
    // result string by letter at current index
    if (i < word2.length) {
      result += word2[i];
    }
  }
  // return result string
  return result;
}

console.log(mergeAlternatively('abc', 'pqr'));
console.log(mergeAlternatively('ab', 'pqrs'));
console.log(mergeAlternatively('abcd', 'pq'));

// define variable with length of longest string
// to determine how many times you'll iterate
// define result variable as empty string
// write for loop to iterate over strings
// increment string by a character in each string
// OR empty space '' if out of letters
// return result string
