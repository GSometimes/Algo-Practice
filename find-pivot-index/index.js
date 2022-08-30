// Directions

// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.



function pivotIndex(nums) {

    // define variable for sum of array values
    let total = nums.reduce(sum, 0);
    // define variable for left starting point
    let leftTotal = 0;
    // define variable for pivot index
    let pivotIndex = null
  
    // iterate over array
    nums.forEach((value, index) => {
  
      // increment left value
      leftTotal += value
      // console.log(total, leftTotal, pivotIndex);
  
      // check to see if total equals leftTotal and if the pivotIndex is null
      // if both are true then set pivotIndex value to the current index
      if (total === leftTotal && pivotIndex === null) {
        pivotIndex = index
      }
  
      // decrement total value
      total -= value
    })
  
    // if pivotIndex is null return -1
    // otherwise return pivotIndex
    return pivotIndex === null ? -1 : pivotIndex;
  };
  
  // reduce helper function
  function sum(total, addition) {
    return total + addition;
  }
  
  
  console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
  console.log(pivotIndex([1, 2, 3])); // -1
  console.log(pivotIndex([2, 1, -1])); // 0