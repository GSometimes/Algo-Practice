// Directions

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function containsDuplicate(nums) {
  // Set is an object that stores unique values
  // Check length of Set with .size not .length
  // Create a new Set with nums array
  // If the size of the Set equals the length of the
  // nums array then return true otherwise return false

  return new Set(nums).size < nums.length;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
