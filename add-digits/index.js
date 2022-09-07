// Directions

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

function addDigits(num) {
  // define base case
  if (num < 10) {
    return num;
  }

  // define variable for final sum
  let finalSum = 0;
  // convert num to string
  const numStr = num.toString();
  // convert string to array
  const numArr = numStr.split('');

  // iterate over array
  for (const num of numArr) {
    // increment value of sum by current value
    // convert value to integer from string
    finalSum += parseInt(num);
  }

  // call addDigits function with final sum parameter
  return addDigits(finalSum);
}

console.log(addDigits(0)); // 0
console.log(addDigits(28)); // 1
console.log(addDigits(38)); // 2
