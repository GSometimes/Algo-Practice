// https://leetcode.com/problems/merge-two-sorted-lists/

// Directions

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Definition for singly-linked list.
// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }

function mergeTwoLists(list1, list2) {
  // create "dummy node" value to point at value of head
  const dummyNode = new ListNode(-Infinity);
  // define variable as node counter pointing to dummyNode
  let prev = dummyNode;

  // while list1 and list2 node values exist
  // check and splice values together
  while (list1 && list2) {
    // if list1 value is less than or equal to list2 value
    if (list1 <= list2) {
      // point prev counter to list1 node
      prev.next = list1;
      // move prev to list1 node
      prev = list1;
      // move current list1 node to next node
      list1 = list1.next;
    } else {
      // point prev counter to list2 node
      prev.next = list2;
      // move prev to list2 node
      prev = list2;
      // move current list2 node to next node
      list2 = list2.next;
    }
  }

  // check to see if list1 or list2 have null values
  // if list1 is null point prev to last node value in list2
  if (list1 === null) {
    prev.next = list2;
  }
  // if list2 is null point prev to last node value in list1
  if (list2 === null) {
    prev.next = list1;
  }
  // return dummyNode since this value always points to front of list
  return dummyNode.next;
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])); // [1,1,2,3,4,4]
console.log(mergeTwoLists([], [])); // []
console.log(mergeTwoLists([], [0])); // [0]
