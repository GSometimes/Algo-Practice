// https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/

// You are given a positive integer num. You may swap any two digits of num that have the same parity (i.e. both odd digits or both even digits).

// Return the largest possible value of num after any number of swaps.

function largestInteger(num) {
  // define empty array variables for even and odd integers
  const even = [];
  const odd = [];

  // convert number to string and split it
  const split = num.toString().split('');

  // iterate over split
  for (const banana of split) {
    // if int value is modulo 2 then push to even array
    // else push to odd array
    if (banana % 2 === 0) {
      even.push(banana);
    } else {
      odd.push(banana);
    }
  }

  // sort even and odd arrays in ascending order
  // sorting to account for case of duplicate values being present
  even.sort();
  odd.sort();

  // define empty array variable for output
  const output = [];

  // iterate over split again
  for (const banana of split) {
    // if banana is modulo 2 then pop last value in even array
    // and push to output array
    // else pop last value in odd array and push to output array
    if (banana % 2 === 0) {
      output.push(even.pop());
    } else {
      output.push(odd.pop());
    }
  }

  // join and return output array
  return output.join('');
}

console.log(largestInteger(1234)); // 3412
console.log(largestInteger(65875)); // 87655
