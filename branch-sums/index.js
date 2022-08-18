// Directions - 
// Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.
// A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.
// Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None/null.

// Example - 

//       1
//      /  \
//     2    3
//    / \  / \
//   4   5  6  7
//  / \  / 
// 8  9 10

// Output - [15, 16, 18, 10, 11]
// 15 == 1 + 2 + 4 + 8
// 16 == 1 + 2 + 4 + 9
// 18 == 1 + 2 + 5 + 10
// 10 == 1 + 3 + 6
// 11 == 1 + 3 + 7


class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // add sum = 0 argument for initial calculation root.value + sum 
  // add sumsList array argument to store runningSum values
  function branchSums(root, sum = 0, sumsList = []) {
    // calculate initial runningSum with node value
    const runningSum = root.value + sum
    // console.log("runningSum", runningSum)
    // define base case for when a node doesn't have a left or right child
    if (!root.left && !root.right) {
      sumsList.push(runningSum);
      // console.log("base case", sumsList)
    }
    // if node has left child node calculate new running sum on left side
    if (root.left) {
      branchSums(root.left, runningSum, sumsList)
      // console.log("root.left", root.left)
      // console.log("root.left sumsList", sumsList)
    }
    // if node has right child node calculate new running sum on right side
    if (root.right) {
      branchSums(root.right, runningSum, sumsList)
      // console.log("root.right", root.right)
      // console.log("root.right sumsList", sumsList)
    }
    
    // return sum array
    return sumsList
    
  } 