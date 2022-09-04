// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.


function searchInsert(nums, target) {
    // define variables for start point on left
    // define variables for end point on right
    let left = 0;
    let right = nums.length - 1;
    
    // edge cases
    // if target is less than left return zero (value less than starting)
    if(target < nums[left]) {
        return 0;
    }
    
    // if target is greater than right return nums.length (value greater than starting)
    if(target > nums[right]) {
        return nums.length;
    }
    
    // iterate over nums with binary search
    while(left <= right) {
        
        // define midpoint
        let middle = Math.floor((left + right) / 2);
        
        // if target equals midpoint then return middle
        if(target === nums[middle]) {
            return middle
        }
        
        // if target is less than nums[middle] set value of right to middle - 1
        // else set value of left to middle + 1
        if(target < nums[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    
    return left
};


console.log(searchInsert([1,3,5,6], 5)) // 2
console.log(searchInsert([1,3,5,6], 2)) // 1
console.log(searchInsert([1,3,5,6], 7)) // 4