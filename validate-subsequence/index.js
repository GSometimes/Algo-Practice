// Directions
// Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
// A Subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but are in the same order as they appear in the array.
// Example
// [1, 3, 4] for a subsequence of the array [1, 2, 3, 4]
// [2, 4] is also a subsequence of the array [1, 2, 3, 4]


function isValidSubsequence(array, sequence) {
    // define index with value of 0
    let index = 0;
    
    // iterate through array
    for(let num of array) {
    // check to see if integer at current array index
    // and integer at current sequence index match
    // if matching increment index
      if(num === sequence[index]) {
        index++;
      }
    }
  
    // check to see if index value equals value of sequence.length
    // output boolean value
    return index === sequence.length;
  }

  console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10, 10])) // false
  console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])) // true