// Directions

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

function isPalindrome(s) {
  // convert string to lowercase
  // remove punctuation and spaces
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // split, reverse, and join string
  // check to see if reversed string equals s
  return s.split('').reverse().join('') === s;
}

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome(' ')); // true
