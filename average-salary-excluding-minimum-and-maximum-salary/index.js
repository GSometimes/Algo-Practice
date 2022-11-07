// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/

// Direction

// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

function average(salary) {
    // create counter for total sum
    let total = 0;
    // define variables for min and max values
    // define variable for length of array
    const min = Math.min(...salary);
    const max = Math.max(...salary);
    // define variable for length of array
    const length = salary.length;

    // iterate through salary array
    // increment total by pay values
    for (const pay of salary) {
        total += pay;
    }

    // define variable for salary amount
    // without min and max values
    const output = total - max - min;

    // return average salary amount
    return output / (length - 2);
}


console.log(average([4000,3000,1000,2000])); // 2500
console.log(average([1000,2000,3000])); // 2000