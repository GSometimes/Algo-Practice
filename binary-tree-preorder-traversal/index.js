// Directions

// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Could you do it iteratively?

// Definition for a binary tree node.

// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

function preorderTraversal(root) {
  // write conditional for empty root
  // if root has no nodes return empty array
  if (!root) {
    return [];
  }

  // define variable for results
  const results = [];
  // define variable for stack
  const stack = [root];
  // console.log('stacks', stack)

  // iterate through stack while length is greater than zero
  while (stack.length) {
    // define variable for top node value
    let topNode = stack.pop();
    // console.log('top', topNode);

    // push topNode value to results array
    results.push(topNode.val);

    // if there is value on right push right node value
    if (topNode.right) {
      // console.log('right', topNode.right);
      stack.push(topNode.right);
    }

    // if there is value on left push left node value
    if (topNode.left) {
      // console.log('left', topNode.left);
      stack.push(topNode.left);
    }
  }

  // return results
  return results;
}

console.log(preorderTraversal([1, null, 2, 3])); // [1, 2, 3]
console.log(preorderTraversal([])); // []
console.log(preorderTraversal([1])); // [1]
