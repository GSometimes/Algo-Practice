// Directions

// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

function validMountainArray(arr) {
  // check to see if array can have peak
  if (arr.length < 3) {
    return false;
  }

  // find max value in array
  const peakValue = Math.max(...arr);

  // find index of max value in array
  const peakIndex = arr.indexOf(peakValue);

  // if the peak is at the beginning or end of array
  // return false
  if (peakIndex === 0 || peakIndex === arr.length - 1) {
    return false;
  }

  // iterate up to the peak
  for (let i = 0; i < peakIndex - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false;
    }
  }

  // iterate from the peak to the end of the array
  for (let j = peakIndex; j < arr.length; j++) {
    if (arr[j] <= arr[j + 1]) {
      return false;
    }
  }

  return true;
}

console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])); // false
console.log(validMountainArray([3, 5, 5])); // false
console.log(validMountainArray([0, 3, 2, 1])); // true
