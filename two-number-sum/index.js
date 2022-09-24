// Directions

// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

// The target sum has to be obtained by summing two different integers in the array, you can't add a single integer to itself in order to obtain the target sum.

// You can assume that there will be at mots one pair of numbers summing up to the target sum.

// Example

// array -> [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum => 10
// returns [11, -1]

// array -> [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum => 20
// returns []

function twoNumberSum(array, targetSum) {
  // iterate over the array
  for (const element of array) {
    // define variable with value of targetSum - element
    // to set first potential pair value
    const potentialPair = targetSum - element;
    // write conditional to see if potentialPair doesn't equal
    // current element being iterated over in for loop
    if (potentialPair !== element) {
      // write conditional to check if the array includes potentialPair
      // and includes current elemeent
      if (array.includes(potentialPair) && array.includes(element)) {
        // if both values equal targetSum then return value pair
        return [potentialPair, element];
      }
    }
  }
  // return array
  return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 20));
