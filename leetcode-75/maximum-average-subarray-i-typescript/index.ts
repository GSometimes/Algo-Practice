// https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=study-plan-v2&envId=leetcode-75

// Directions

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

function findMaxAverage(nums: number[], k: number): number {
  // instantiate variable for "first window" sum
  let windowSum: number = 0;
  // iterate over nums to create determine "first window" sum
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  // instantiate variable for max sum output
  let maxSum: number = windowSum;

  // iterate over nums and "slide window"
  for (let i = k; i < nums.length; i++) {
    // slide window and subtract previous value out and add new value to window
    // set new value of window sum
    windowSum = windowSum - nums[i - k] + nums[i];

    // if the value of window sum is greater than max sum
    if (windowSum > maxSum) {
      // set value of max sum to value of window sum
      maxSum = windowSum;
    }
  }

  // return value of max sum divided by k
  return maxSum / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75
console.log(findMaxAverage([5], 1)); // 5
