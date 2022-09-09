// Directions

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

function numJewelsInStones(jewels, stones) {
    // define counter
    let counter = 0;
    // define object
    let jewelObj = {}; // {a: true, A: true}

    // iterate over jewels string
    for (const jewel of jewels) {
        jewelObj[jewel] = true;
    }

    // iterate over stones string
    for (const stone of stones) {
        // check to see if stone is in jewelObj
        // if stone exists in jewelObj counter ++
        if (stone in jewelObj) {
            counter++
        }
    }
    // return counter
    return counter
}

console.log(numJewelsInStones("aA", "aAAbbbb")); // 3
console.log(numJewelsInStones("zz", "ZZ")); // 0