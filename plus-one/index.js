// Directions

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

function plusOne(digits) {
  // iterate through digits array starting from the last number
  for (let i = digits.length - 1; i >= 0; i--) {
    // check to see if value on current index is less than 9
    // checks to see if you need to carry over 1
    if (digits[i] < 9) {
      // if less than 9 then add 1 to current index value
      digits[i] = digits[i] + 1;

      // return digits
      return digits;
    } else {
      // set value of digits to 0
      digits[i] = 0;
    }
  }

  // add 1 to beginning of array
  digits.unshift(1);

  // return digits
  return digits;
}

console.log(plusOne([1, 2, 3])); // [ 1, 2, 4 ]
console.log(plusOne([4, 3, 2, 1])); // [ 4, 3, 2, 2 ]
console.log(plusOne([9])); // [ 1, 0 ]
