// Directions

// Given an array of string words. Return all strings in words which is substring of another word in any order.

// String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

function stringMatching(words) {
  // define empty array for results
  let results = [];
  // define variable to join strings
  let string = words.join(' ');

  // iterate over words array
  for (let word of words) {
    let regex = new RegExp(word, 'g');
    if (string.match(regex).length > 1) {
      results.push(word);
    }
  }

  // return results array
  return results;
}

// ['as', 'hero']
console.log(stringMatching(['mass', 'as', 'hero', 'superhero']));
// ['et', 'code']
console.log(stringMatching(['leetcode', 'et', 'code']));
// []
console.log(stringMatching(['blue', 'green', 'bu']));
