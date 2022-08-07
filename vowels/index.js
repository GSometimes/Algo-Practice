// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// // solution #1
// function vowels(str) {
//   // define counter variable
//   let count = 0;

//   // define "checker variable"
//   let checker = ['a', 'e', 'i', 'o', 'u'];

//   // iterate over string and convert to lowercase
//   for (let char of str.toLowerCase()) {
//     // if character is vowel then increment counter
//     if (checker.includes(char)) {
//       count++;
//     }
//   }

//   // return count
//   return count;
// }

// solution #2
function vowels(str) {
  // define variable that will "match" string with regex
  // 'g' is for globally, doesn't stop at first element
  // 'i' is for case insensitivity
  // match returns an array of values or 'null' if no valuess
  const matches = str.match(/[aeiou]/gi);

  // IF matches is 'truthy' then return matches.length
  // ELSE return 0
  return matches ? matches.length : 0;
}

console.log(vowels('banana'));
console.log(vowels('wine'));
console.log(vowels('sdfg'));
