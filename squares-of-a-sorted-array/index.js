// https://leetcode.com/problems/squares-of-a-sorted-array/

// Directions

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

function sortedSquares(nums) {
  // define output array
  const output = [];

  // iterate through nums
  for (const num of nums) {
    // push squared values to output
    output.push(num * num);
  }

  // return sorted output array
  return output.sort((a, b) => a - b);
}
