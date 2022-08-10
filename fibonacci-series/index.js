// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// solution #1
function fib(n) {
  // declare array to hold numbers
  // add first two values set to array
  const result = [0, 1];

  // iterate from i = 2 to n
  for (let i = 2; i <= n; i++) {
    // define variables of two indeces you'll be adding together
    const a = result[i - 1];
    const b = result[i - 2];

    // add a + b and push into result array
    result.push(a + b);
  }

  // return result at n
  return result[n];
}

// solution #2
function fib(n) {
  // base case
  if (n < 2) {
    return n;
  }

  // recursive things happening
  //  a        //  b
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4));
console.log(fib(6));
console.log(fib(3));
