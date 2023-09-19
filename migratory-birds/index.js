// https://www.hackerrank.com/challenges/migratory-birds/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

// Example

// arr = [1,1,2,2,3]

// There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.

// Function Description

// Complete the migratoryBirds function in the editor below.

// migratoryBirds has the following parameter(s):

// int arr[n]: the types of birds sighted

// Returns
// int: the lowest type id of the most frequently sighted birds

// Input Format
// The first line contains an integer, , the size of .
// The second line describes  as  space-separated integers, each a type number of the bird sighted.

// Constraints
// 5 <= n <= 2 * 10^5
// It is guaranteed that each type is 1, 2, 3, 4, or 5.

// Sample Input 0
// 6
// 1 4 4 4 5 3

// Sample Output 0
// 4

function migratoryBirds(arr) {
  // define hash map to keep track of bird sightings
  const birdTracker = {};

  // iterate over arr
  for (const bird of arr) {
    // if birdTracker[bird] is undefined
    // set birdTracker[bird] to 1
    // else increment birdTracker[bird]
    birdTracker[bird] = birdTracker[bird] + 1 || 1;
  }

  // define variable for max bird sightings
  let maxSightings = 0;

  // define variable for most common bird
  let mostCommonBird;

  // iterate over birdTracker
  for (const bird in birdTracker) {
    // if birdTracker[bird] is greater than maxSightings
    // set maxSightings to birdTracker[bird]
    // set mostCommonBird to bird
    if (birdTracker[bird] > maxSightings) {
      maxSightings = birdTracker[bird];
      mostCommonBird = bird;
    }
  }

  // return mostCommonBird
  return mostCommonBird;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3])); // 4
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])); // 3
