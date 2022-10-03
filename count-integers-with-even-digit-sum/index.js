// Directions

// Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.

// The digit sum of a positive integer is the sum of all its digits.

// main function
function countEven(num) {
  // define counter variable
  let counter = 0;
  // iterate over integers from 1 to num
  for (let i = 1; i <= num; i++) {
    // console.log('digits value', digitSum(i));
    // if the sum of digits at current index is % 2 === 0
    // increment counter
    if (digitSum(i) % 2 === 0) {
      counter++;
    }
  }
  //return counter
  return counter;
}

// helper function
function digitSum(num) {
  // define sum variable
  let sum = 0;

  // while num is greater than 0
  while (num > 0) {
    // calculate remainder and increment sum
    sum += num % 10;
    //console.log('sum mod', sum);

    // set value of num to the rounded down value of num divided by 10
    num = Math.floor(num / 10);
  }
  // return sum
  return sum;
}

console.log(countEven(4)); // 2
console.log(countEven(30)); // 14
console.log(countEven(17)); // 8
