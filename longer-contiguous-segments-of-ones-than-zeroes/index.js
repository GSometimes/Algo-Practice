// Directions

// Given a binary string s, return true if the longest contiguous segment of 1's is strictly longer than the longest contiguous segment of 0's in s, or return false otherwise.

// For example, in s = "110100010" the longest continuous segment of 1s has length 2, and the longest continuous segment of 0s has length 3.
// Note that if there are no 0's, then the longest continuous segment of 0's is considered to have a length 0. The same applies if there is no 1's.

function checkZeroOnes(s) {
  // create counter for current amount of ones and zeroes
  let oneCounter = 0;
  let zeroCounter = 0;
  // create counter for "max" value of ones and zeroes
  let maxOne = 0;
  let maxZero = 0;

  // iterate over input string
  for (const letter in s) {
    // if the value of current index equals '1' then increment one Counter and set the value of zeroCounter to '0'
    // else increment the zeroCounter and set the value of oneCounter to '0'
    if (s[letter] === '1') {
      oneCounter++;
      zeroCounter = 0;
    } else {
      zeroCounter++;
      oneCounter = 0;
    }

    // set value of maxOne to maximum value between both counters
    maxOne = Math.max(oneCounter, maxOne);
    // set value of maxZero to maximum value between both counters
    maxZero = Math.max(zeroCounter, maxZero);
  }

  // check if maxOne value is greater than maxZero value
  // return true or false
  return maxOne > maxZero;
}

console.log(checkZeroOnes('1101')); //true
console.log(checkZeroOnes('111000')); // false
console.log(checkZeroOnes('110100010')); // false
