// Directions

// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

function maxNumberOfBalloons(text) {
  // define variable as empty object
  const hash = {};
  // define variable for counter
  let counter = 0;

  // iterate through text
  for (const letter of text) {
    // create key value pairs
    hash[letter] = hash[letter] + 1 || 1;
  }

  // while the letter count matches the amount needed
  while (
    hash['a'] > 0 &&
    hash['b'] > 0 &&
    hash['l'] > 1 &&
    hash['n'] > 0 &&
    hash['o'] > 1
  ) {
    // increment counter
    counter++;

    // decrement letter count
    hash['a']--;
    hash['b']--;
    hash['l'] -= 2;
    hash['n']--;
    hash['o'] -= 2;
  }

  // return counter
  return counter;
}

console.log(maxNumberOfBalloons('nlaebolko')); // 1
console.log(maxNumberOfBalloons('loonbalxballpoon')); // 2
console.log(maxNumberOfBalloons('leetcode')); // 0
