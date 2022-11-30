// https://leetcode.com/problems/palindrome-linked-list/

// Directions

// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

function isPalindrome(head) {
  // define output array
  const output = [];

  // iterate through head values
  while (head) {
    // push current value of head to output
    output.push(head.val);
    // set value of head to next value in list
    head = head.next;
  }

  // compare output array with itself to see
  // if it is a palindrome
  // use slice method to create duplicate output array
  // for comparison
  // return boolean
  return output.join('') === output.slice().reverse().join('');
}

console.log(isPalindrome([1, 2, 2, 1])); // true
console.log(isPalindrome([1, 2])); // false
