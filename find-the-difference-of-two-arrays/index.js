// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

function findDifference(nums1, nums2) {
  // define output variable
  const output = [[], []];

  // create Set for nums1 and nums2
  // creates new array with no duplicate values
  const newSet1 = [...new Set(nums1)];
  const newSet2 = [...new Set(nums2)];

  // loop through newSet1
  // check if newSet2 includes value from newSet1
  // if not, push to output[0]
  for (const num of newSet1) {
    if (!newSet2.includes(num)) {
      output[0].push(num);
    }
  }

  // loop through newSet2
  // check if newSet1 includes value from newSet2
  // if not, push to output[1]
  for (const num of newSet2) {
    if (!newSet1.includes(num)) {
      output[1].push(num);
    }
  }

  // return output
  return output;
}
