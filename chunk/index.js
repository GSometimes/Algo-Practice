// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// //solution # 1
// function chunk(array, size) {
//   // declare empty array to hold chunks
//   let chunked = [];

//   // iterate through original array of elements
//   for (let element of array) {
//     // get last element in the chunked array
//     const last = chunked[chunked.length - 1];

//     // if the last element does not exist or the length of last
//     // equals the size then add new element to chunked
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }

//   // return chunked array
//   return chunked;
// }

//solution # 2
function chunk(array, size) {
  // define new array of chunk
  let chunked = [];
  // define index with value of 0
  let index = 0;

  // iterate over array with while loop
  while (index < array.length) {
    // slice elements and push to chunked array
    chunked.push(array.slice(index, index + size));

    // increment index by "size"
    index += size;
  }

  return chunked;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 2));
