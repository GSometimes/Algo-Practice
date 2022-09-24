// Directions

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

function singleNumber(nums) {
  // define empty object variable
  let hash = {};
  // iterate over nums
  for (const num of nums) {
    // increment count of existing key value pair
    // OR create new key value pair
    hash[num] = hash[num] + 1 || 1;
  }
  // iterate over hash table
  for (const tot in hash) {
    // if value of key equals 1 return that key
    if (hash[tot] === 1) {
      return tot;
    }
  }
}

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1


// define empty object variable (hash table)
// iterate over nums array
// increment count of exising key value pair
// OR create new key value pair
// iterate over hash table
// if value of key equals 1 return that key