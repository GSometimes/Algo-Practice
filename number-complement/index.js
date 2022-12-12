// https://leetcode.com/problems/number-complement/description/

// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer num, return its complement.

function findComplement(num) {
  // convert integer to binary string
  const binary = num.toString(2);

  // define empty output string
  let output = '';

  // iterate over string
  for (const el of binary) {
    // if equals 0 then increment by complement
    // 1 is complement of 0
    // else increment by 0
    if (el === '0') {
      output += '1';
    } else {
      output += '0';
    }
  }

  // return integer value
  return parseInt(output, 2);
}

console.log(findComplement(5)); // 2
console.log(findComplement(1)); // 0
