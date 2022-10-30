// https://leetcode.com/problems/uncommon-words-from-two-sentences/

// Directions

// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

function uncommonFromSentences(s1, s2) {
  // create hash object
  const hash = {};
  // define variable that combines both strings together
  const newSentence = s1.split(' ').concat(s2.split(' '));

  // iterate through new string and create key value pairs
  for (const word of newSentence) {
    hash[word] = hash[word] + 1 || 1;
  }

  // define output array
  const output = [];

  // iterate through hash object and check to see which value has count of 1
  // the key with the value of 1 would be the "uncommon" word
  for (const tot in hash) {
    // push "uncommon" values to output array
    if (hash[tot] === 1) {
      output.push(tot);
    }
  }

  // return output array
  return output;
}

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour')); // ['sweet', 'sour']

console.log(uncommonFromSentences('apple apple', 'banana')); // ['banana']
