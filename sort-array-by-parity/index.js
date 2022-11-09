// https://leetcode.com/problems/sort-array-by-parity/

// Directions

// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

// Solution # 1
function sortArrayByParity(nums) {
  // sort nums array with compare function
  const sorted = nums.sort(function (a, b) {
    // sort by even numbers and then odd numbers
    return (a % 2) - (b % 2);
  });

  return sorted;
}

// Solution # 2
function sortArrayByParity(nums) {
  // define output array
  const output = [];

  // iterate through array
  for (let i = 0; i < nums.length; i++) {
    // if number at current index is even
    // push to the beginning of output array
    // else push to the end of output array
    if (nums[i] % 2 === 0) {
      output.unshift(nums[i]);
    } else {
      output.push(nums[i]);
    }
  }

  // return output
  return output;
}

console.log(sortArrayByParity([3, 1, 2, 4])); // [2, 4, 3, 1]
console.log(sortArrayByParity([0])); // [0]
