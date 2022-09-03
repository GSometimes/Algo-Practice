// Directions

// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

function containsNearbyDuplicate(arr, k) {
  // define variable for true/false
  let isTrue = false;
  // define variable for empty object
  let obj = {};
  // iterate through array
  arr.forEach((num, j) => {
    // if value is exists (using undefined because zero is considered falsy value)
    // and if the absolute value of obj[nums]( which is i) - j is less than
    // or equal to k change isTrue from false to true
    if (obj[num] !== undefined && Math.abs(obj[num] - j) <= k) {
      isTrue = true;
    }

    // in each iteration add key value pairs
    obj[num] = j;
  });

  // return isTrue
  return isTrue;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 4, 5, 1, 3, 2, 5, 3], 2)); // false
