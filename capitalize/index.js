// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// // solution #1
// function capitalize(str) {
//   // declare empty array
//   const words = [];

//   // split string and iterate through it in for loop
//   for (let word of str.split(' ')) {
//     // uppercase first letter in the word and join it
//     // with the rest of the word
//     // push the word into the "words" array
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   // join words and return string
//   return words.join(' ');
// }

// solution #2
function capitalize(str) {
  // create 'result' which is the first character of the input string capitalized
  let result = str[0].toUpperCase();

  // iterate through input string
  for (let i = 1; i < str.length; i++) {
    // if character to the left is a space take current character
    // and capitalize it
    if (str[i - 1] === ' ') {
      // add capitalized string value to the "result" string
      result += str[i].toUpperCase();
    } else {
      // add rest of string values to "result" string"
      result += str[i];
    }
  }

  return result;
}

console.log(capitalize('hi there, how is it going?')); // Hi There, How Is It Going?
console.log(capitalize('i love breakfast at bill miller bbq')); // I Love Breakfast At Bill Miller Bbq
