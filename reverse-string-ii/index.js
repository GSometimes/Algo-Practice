// https://leetcode.com/problems/reverse-string-ii/description/

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

function reverseStr(s, k) {
  // base case
  // if the string length is less than the value of k
  // reverse the string and return output
  if (s < k) {
    return s.split('').reverse().join('');
  }

  // define variable for split string array
  const split = s.split('');

  // define variable for output string
  let output = '';

  // iterate over split array
  // increment by 2*k because those are the two points
  // that you'll be reversing the current character
  // and the next character
  for (let i = 0; i < split.length; i += 2 * k) {
    // increment output by set of sliced/reversed values
    output += split
      .slice(i, i + k)
      .reverse()
      .join('');
    // increment output by set of not sliced/reversed values
    output += s.slice(i + k, i + 2 * k);
  }

  // return output
  return output;
}

console.log(reverseStr('abcdefg', 2)); // bacdfeg
console.log(reverseStr('abcd', 2)); // bacd
console.log(reverseStr('ab', 2)); // ba
