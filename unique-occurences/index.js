// https://leetcode.com/problems/unique-number-of-occurrences/?envType=study-plan-v2&envId=leetcode-75

// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

function uniqueOccurences(arr) {
  // define variable for hash map
  const hash = {};

  // iterate through array and create key value pairs
  for (const num in arr) {
    hash[arr[num]] = hash[arr[num]] + 1 || 1;
  }

  console.log('hash', hash);

  // create variable for hash values
  const values = Object.values(hash);
  console.log('values', values);

  // create variable for hash values set
  const valuesSet = new Set(values);
  console.log('valuesSet', valuesSet);

  // compare hash values length to hash values set length
  return values.length === valuesSet.size;
}

console.log(uniqueOccurences([1, 2, 2, 1, 1, 3])); // true
console.log(uniqueOccurences([1, 2])); // false
console.log(uniqueOccurences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // true