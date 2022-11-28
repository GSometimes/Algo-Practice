// https://leetcode.com/problems/binary-tree-postorder-traversal/

// Directions

// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

function postorderTraversal(root) {
  // if root has no nodes return empty array
  if (!root) return [];

  // define variables for output
  const output = [];

  // define variable for stack
  // add root values to stack
  const stack = [root];

  // iterate through stack if length is greater than zero
  while (stack.length) {
    // define variable for current node value
    const currentNode = stack.pop();

    // push value of currentNode to output
    output.push(currentNode.val);

    // if there is value on left push left node value to stack
    if (currentNode.left) {
      stack.push(currentNode.val);
    }

    // if there is value on right push right node value to stack
    if (currentNode.right) {
      stack.push(currentNode.val);
    }

    // return reversed output
    return output.reverse();
  }
}

console.log(postorderTraversal([1, null, 2, 3])); // [3, 2, 1]
console.log(postorderTraversal([])); // []
console.log(postorderTraversal([1])); // [1]
