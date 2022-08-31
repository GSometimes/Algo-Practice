// Directions

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Examples

// Input: s = "Hello World"
// Output: 5

// Input: s = "   fly me   to   the moon  "
// Output: 4

// Input: s = "Gouda guy grabs Gruyere"
// Output: 7

function lengthOfLastWord(s) {
  // .trim() removes white space from beginning
  // and end of a string
  // .split() string at spaces
  // .pop() removes and returns last element from array
  // return length of "popped" element
  return s.trim().split(' ').pop().length;
}

console.log(lengthOfLastWord('Hello World')); // 5
console.log(lengthOfLastWord("   Get in Loser   we're  going shopping  ")); // 8
console.log(lengthOfLastWord('Gouda guy grabs Gruyere')); // 7

// Color of the Day: #f4afb4