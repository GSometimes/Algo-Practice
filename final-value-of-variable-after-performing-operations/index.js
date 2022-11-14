// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

// Directions

// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

function finalValueAfterOperations(operations) {
  // define counter variable
  let count = 0;

  // iterate through array
  // only have to account for 2 operations - adding and subtracting
  // if operation value equals '++X' or 'X++' then increment by 1
  // else decrement by 1
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === '++X' || operations[i] === 'X++') {
      count++;
    } else {
      count--;
    }
  }

  // return counter
  return count;
}

console.log(finalValueAfterOperations(['--X', 'X++', 'X++'])); // 1
console.log(finalValueAfterOperations(['++X', '++X', 'X++'])); // 3
