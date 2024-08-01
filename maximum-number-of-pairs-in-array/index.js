// Directions

// You are given a 0-indexed integer array nums. In one operation, you may do the following:

// Choose two integers in nums that are equal.
// Remove both integers from nums, forming a pair.

// The operation is done on nums as many times as possible.

// Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.

function numberOfPairs(nums) {
  // define variable as empty object
  let hash = {};
  // define variable for pair counter
  let pairs = 0;
  // define variable for length counter
  let length = 0;

  // iterate over array and create key value pairs
  for (const num of nums) {
    // if key value pair doesn't exist increment count
    // OR create new key value pair
    hash[num] = hash[num] + 1 || 1;
  }

  // iterate over object
  for (const tot in hash) {
    // if value has remainder increment length
    if (hash[tot] % 2 === 1) {
      length++;
    }
    // increment pairs counter
    pairs += Math.floor(hash[tot] / 2);
  }

  // return array with pairs count and length count
  return [pairs, length];
}

console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2])); // [3, 1]
console.log(numberOfPairs([1, 1])); // [1, 0]
console.log(numberOfPairs([0])); // [0, 1]
