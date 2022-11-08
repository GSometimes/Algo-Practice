// https://leetcode.com/problems/richest-customer-wealth/

// Directions

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Solution # 1

function maximumWealth(accounts) {
  // define variable for greater wealth
  let greaterWealth = 0;

  // iterate through parent array
  for (let i = 0; i < accounts.length; i++) {
    // define counter for sum of each account
    let currentWealth = 0;
    // iterate through child array
    // increment sum by each dollar amount in array
    for (let j = 0; j < accounts[i].length; j++) {
      currentWealth += accounts[i][j];
    }
    // set the value of wealth to the max value between wealth and sum
    greaterWealth = Math.max(currentWealth, greaterWealth);
  }
  // return wealth
  return greaterWealth;
}

// Solution # 2

function maximumWealth(accounts) {
  // define variable for greater wealth
  let greaterWealth = 0;

  // iterate through accounts
  for (let i = 0; i < accounts.length; i++) {
    // define variable that calculates the sum of each account with reducer
    let currentWealth = accounts[i].reduce((prev, curr) => prev + curr);

    // if current wealth is greater than greater wealth
    // set value of greater wealth to that of current wealth
    if (currentWealth > greaterWealth) {
      greaterWealth = currentWealth;
    }
  }

  // return greater wealth
  return greaterWealth;
}


console.log(maximumWealth([[1,2,3],[3,2,1]])); // 6
console.log(maximumWealth([[1,5],[7,3],[3,5]])); // 10