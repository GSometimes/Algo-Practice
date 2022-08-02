// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// // solution #1
// function anagrams(stringA, stringB) {
//   // string character maps for stringA and stringB
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   // "pull" keys out of objects and check lengths and compare
//   // lengths to not match then return false
//   // if lengths do match then iterate over charMaps
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//   // "of" is for iterating arrays
//   // "in" is for iterating objects
//   for (let char in aCharMap) {
//     // if value in aCharMap doesn't match with value in bCharMap
//     // return false
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   // if anagram
//   return true;
// }

// // write helper function to build character map
// function buildCharMap(str) {
//   // define empty character map
//   const charMap = {};

//   // write for loop to iterate over strings and "clean up" (remove)
//   // spaces and punctuation with regex
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     // assign character map with key of current character
//     // increment value at that character or assign value of 1
//     charMap[char] = charMap[char + 1] || 1;
//   }

//   // return character map
//   return charMap;
// }

// solution #2
function anagrams(stringA, stringB) {
  // comparing both strings together to see if they match
  // if they are matching they are anagram
  return cleanString(stringA) === cleanString(stringB);
}

// write helper function to build character map
// and "clean up" string by replacing punctuation or spaces
// with nothing
function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

console.log(anagrams('hello', 'llohe'));
console.log('Whoa! Hi!', 'Hi! Whoa!');
console.log('One one', 'One one c');
