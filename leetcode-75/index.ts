// https://leetcode.com/problems/sort-the-people/description/?envType=daily-question&envId=2024-07-22

// Directions

// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

function sortPeople(names: string[], heights: number[]): string[] {
  
    // ceate an array of indices based on the heights array
  const indices: number[] = heights.map((_, index) => index);

  // sort the indices array based on the heights array in descending order
  indices.sort((a, b) => heights[b] - heights[a]);

  // create an output array based on the sorted indices array
  // and the names array using the sorted indices
  // to get the names in descending order based on the heights
  const output: string[] = indices.map((index) => names[index]);

  // return output
  return output;
}

console.log(sortPeople(['Mary', 'John', 'Emma'], [180, 165, 170])); // ["Mary", "Emma", "John"]
console.log(sortPeople(['Alice', 'Bob', 'Bob'], [155, 185, 150])); // ["Bob","Alice","Bob"]
