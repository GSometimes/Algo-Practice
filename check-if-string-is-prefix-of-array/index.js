// Directions

// Given a string s and an array of strings words, determine whether s is a prefix string of words.

// A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.

// Return true if s is a prefix string of words, or false otherwise.

function isPrefixString(s, words) {
  // define result variable as empty string
  let result = '';
  // iterate through words array
  for (let i = 0; i < s.length; i++) {
    // increment result string by each word in the array
    result += words[i];
    // check to see if result equals value of s string
    // if result equals s then return true
    if (result === s) {
      return true;
    }
  }
  // return false
  return false;
}

console.log(isPrefixString("ilovewine", ['i', 'love', 'wine', 'tomato'])) // true
console.log(isPrefixString("ilovewine", ['i', 'love', 'tomato', 'wine'])) // false