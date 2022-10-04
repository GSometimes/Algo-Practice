// Directions

// Given an array of integers arr, replace each element with its rank.

// The rank represents how large the element is. The rank has the following rules:

// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.

function arrayRankTransform(arr) {
  // define variable as empty array
  let output = [];
  // define variable as empty object
  let hash = {};
  // define variable for rank
  let rank = 1;
  // define variable for sorted copy array
  // spread operator creates clone of array
  let sorted = [...arr].sort((a, b) => a - b);

  // iterate through sorted array
  for (let num of sorted) {
    // create key value pairs with incrementing rank
    // IF they do not exist in hash object
    if (!hash[num]) {
      hash[num] = rank++;
    }
  }

  // iterate through original array
  for (let num of arr) {
    // push rank value from hash object to output array
    output.push(hash[num]);
  }

  // return output array
  return output;
}

console.log(arrayRankTransform([40, 10, 20, 30])); // [4,1,2,3]
console.log(arrayRankTransform([100, 100, 100])); // [1,1,1]
console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12])); // [5,3,4,2,8,6,7,1,3]
