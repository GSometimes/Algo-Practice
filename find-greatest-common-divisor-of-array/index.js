// https://leetcode.com/problems/find-greatest-common-divisor-of-array/description/

// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

function findGCD(nums) {
  // define divisors array
  const divisors = [];
  // find smallest value
  const min = Math.min(...nums);
  // find largest value
  const max = Math.max(...nums);

  // iterate through array and divide smallest value
  // and largest values by i
  // if quotient equals 0 push value to divisors array
  for (let i = 1; i <= min; i++) {
    if (min % i === 0 && max % i === 0) {
      divisors.push(i);
    }
  }

  // return largest value in divisors array
  return Math.max(...divisors);
}

console.log(findGCD([2, 5, 6, 9, 10])); // 2
console.log(findGCD([7, 5, 6, 8, 3])); // 1
console.log(findGCD([3, 3])); // 3
