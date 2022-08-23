// Directions

// Write a function to convert a name into initials. Strictly takes two words with one space in between them.
// The output should be two capital letters with a '.' separating them. 

// Example

// sam harris -> S.H
// Gouda Guy -> G.G


function abbrevName(name) {
  // split name string
  // iterate over array and grab first letter of each string
  // capitalize string
  // join with a '.'
  return name.split(' ').map((e) => e.substr(0, 1).toUpperCase()).join('.');
}

// console.log(abbrevName('Gouda Guy'));