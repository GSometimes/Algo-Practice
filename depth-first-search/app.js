// Directions
// You're given a Node class that has a name and an array of optional children nodes. When put together, nodes form an acyclic tree-like structure.
// Implement the depthFirstSearch method on the Node class, which takes in an empty array, traverses the tree using the Depth-first Search approach (specifically navigating the tree from left to right),  stores all of the nodes' names in the input array, and returns it.

// Example

// Graph -
//      A
//    / | \
//   B  C  D
//  / \   / \
// E   F G   H
//    / \ \
//   I  J  K

// Output - 
// ['A', 'B', 'E', 'F', 'I', 'J', 'C', 'D', 'G', 'K', 'H']

class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }

    depthFirstSearch(array){
        // push first node value to array
        array.push(this.name);
        // iterate through children nodes
        for (const child of this.children) {
            // recursively push current node value 
            child.depthFirstSearch(array);
        }
        // return array
        return array
    }

}