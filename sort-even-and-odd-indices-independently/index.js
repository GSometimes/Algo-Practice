// https://leetcode.com/problems/sort-even-and-odd-indices-independently/

// Directions

// You are given a 0-indexed integer array nums. Rearrange the values of nums according to the following rules:

// Sort the values at odd indices of nums in non-increasing order.

// For example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after. The values at odd indices 1 and 3 are sorted in non-increasing order.

// Sort the values at even indices of nums in non-decreasing order.

// For example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after. The values at even indices 0 and 2 are sorted in non-decreasing order.

// Return the array formed after rearranging the values of nums.

function sortEvenOdd(nums) {
  // create even and odd arrays
  const even = [];
  const odd = [];

  // iterate through nums to separate even and odd numbers
  for (let i = 0; i < nums.length; i++) {
    // if even push to even array
    // else push to odd array
    if (i % 2 === 0) {
      even.push(nums[i]);
    } else {
      odd.push(nums[i]);
    }
  }

  // define output array
  const output = [];
  // sort even array in non-decreasing order
  const sortedEven = even.sort((a, b) => a - b);
  // sort odd array in non-increasing order
  const sortedOdd = odd.sort((a, b) => b - a);

  // iterate through nums array
  for (let i = 0; i < nums.length; i++) {
    // if index is even push even integer to output
    // else push odd integer to output
    if (i % 2 === 0) {
      output.push(even.shift());
    } else {
      output.push(odd.shift());
    }
  }

  // return output
  return output;
}

console.log(sortEvenOdd([4, 1, 2, 3])); // [2, 3, 4, 1]
console.log(sortEvenOdd([2, 1])); // [2, 1]
