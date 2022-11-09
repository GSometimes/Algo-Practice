// https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/

// Directions

// Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non included elements in such subsequence.

// If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements. A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array.

// Note that the solution with the given constraints is guaranteed to be unique. Also return the answer sorted in non-increasing order.

function minSubsequence(nums) {
  // sort array from greatest to least
  let sorted = nums.sort((a, b) => b - a);
  // define variable for maxSum
  let maxSum = 0;
  // define variable for totalSum
  let totalSum = 0;
  // define output array
  let output = [];

  // iterate through sorted array
  for (let num of sorted) {
    // increment totalSum by current value
    totalSum += num;
  }

  // iterate through nums array
  for (let num of nums) {
    // increment maxSum by current value
    maxSum += num;
    // push current value to output array
    output.push(num);
    // IF maxSum is greater than totalSum - maxSum
    if (maxSum > totalSum - maxSum) {
      // return output array
      return output;
    }
  }
}

console.log(minSubsequence([4, 3, 10, 9, 8])); // [ 10, 9 ]
console.log(minSubsequence([4, 4, 7, 6, 7])); // [ 7, 7, 6 ]
