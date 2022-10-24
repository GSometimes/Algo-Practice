// https://leetcode.com/problems/count-items-matching-a-rule/

// Directions

// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

function countMatches(items, ruleKey, ruleValue) {

    // define counter
    let counter = 0;

    // write conditional to determine what the value of "ruleKey" will be and which index to check in item array
    // if it is "type" set the index value to 0 since the first item in the item array is the "type of device"
    if (ruleKey === 'type') index = 0;
    // if it is "color" set the index value to 1 since the second item in the item array is "color of device"
    if (ruleKey === 'color') index = 1;
    // if it is "name" set the index value to 2 since the third item in the item array is "name of device"
    if (ruleKey === 'name') index = 2;

    // iterate over items array
    items.forEach(item => {
        // for every item that matches the ruleValue increment counter
        if (item[index] === ruleValue) counter++;
    })

    // return counter
    return counter
}


// Output is 1 because there is only one item matching.
console.log(countMatches(items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"));

// Output is 2 because there are two items matching.
console.log(countMatches(items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"));