// https://leetcode.com/problems/defanging-an-ip-address/

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Solve iteratively without using replace, split, or join.

function defangIPaddr(address) {
  // define variable as empty string
  let result = '';

  // iterate through address string
  for (const char of address) {
    // if char equals '.'
    // increment result by '[.]'
    // else increment by char
    if (char === '.') {
      result += '[.]';
    } else {
      result += char;
    }
  }

  // return result
  return result;
}

console.log(defangIPaddr('1.1.1.1')); // "1[.]1[.]1[.]1"
console.log(defangIPaddr('255.100.50.0')); // "255[.]100[.]50[.]0"
