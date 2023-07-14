// Decode XORed Array

// There is a hidden integer array arr that consists of n non-negative integers.

// It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3].

// You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0].

// Return the original array arr. It can be proved that the answer exists and is unique.

function decode(encoded, first) {
  // create an array to store the decoded values
  let arr = [first];
  // loop through the encoded array
  for (let i = 0; i < encoded.length; i++) {
    // push the decoded values into the array
    // the ^ value is the XOR operator which is a bitwise operator
    // it returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s
    // if the first value is 1 and the second value is 0, the result is 1
    // if the first value is 0 and the second value is 1, the result is 1
    // if the first value is 0 and the second value is 0, the result is 0
    // if the first value is 1 and the second value is 1, the result is 0
    // the first value is the first value in the array
    arr.push(arr[i] ^ encoded[i]);
  }

  // return the decoded array
  return arr;
}

console.log(decode([1, 2, 3], 1));
