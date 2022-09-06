// Directions

// One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.

// One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. Value is defined as the largest component of a color:

// Value = max(R,G,B)

// You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors. If there are multiple "brightest colors," return the first one.

// Note that both input and output should use upper case for characters "A, B, C, D, E, F."

function brightest(colors) {
  // define color index variable to determine which hex value we're iterating over
  let index = 0;
  // define max value index to determine the "max value" of each pair
  let max = 0;

  // iterate through colors array
  for (let i = 0; i < colors.length; i++) {
    // declare variable for color to determine color at current index
    let color = colors[i].toUpperCase();

    // declare RGB variables with parseInt()
    // use slice() to grab pairs from hex color for R,G,B
    let R = parseInt(color.slice(1, 3), 16);
    let G = parseInt(color.slice(3, 5), 16);
    let B = parseInt(color.slice(5, 7), 16);

    // use Math.max() and define value with that method
    let value = Math.max(R, G, B);

    // write conditional to compare max values and determine which one is greater
    // set color index variable to value of index
    if (value > max) {
      max = value;
      index = i;
    }
  }

  // return color and the current index that has greater max value
  return colors[index];
}

console.log(brightest(['#001000', '#000000'])); // #001000
console.log(brightest(['#ABCDEF', '#123456'])); // #ABCDEF
console.log(brightest(['#00FF00', '#FFFF00', '#01130F'])); // #00FF00
