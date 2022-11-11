// https://leetcode.com/problems/find-target-indices-after-sorting-array/

// You are given a 0-indexed integer array nums and a target element target.

// A target index is an index i such that nums[i] == target.

// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

function targetIndices(nums,target) {
    // sort nums
    const sorted = nums.sort((a,b) => a - b);
    // define output array
    const output = [];

    // iterate over sorted nums array
    for (let i = 0; i < sorted.length; i++) {
        // if nums at current index equals target
        // push to output array
        if (nums[i] === target) {
            output.push(i);
        }
    }

    // return output
    return output;
}


console.log(targetIndices([1,2,5,2,3], 2)); // [1, 2]
console.log(targetIndices([48,90,9,21,31,35,19,69,29,52,100,54,21,86,6,45,42,5,62,77,15,38], 6)); // [1]
console.log(targetIndices([1,2,5,2,3], 5)); // [4]