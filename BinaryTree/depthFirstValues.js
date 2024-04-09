class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
// Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.

// const depthFirstValues = (root) => {
//     let stack = [root];
//     const ans = [];
//     while (stack.length > 0) {
//         let node = stack.pop();
//         ans.push(node.val);
//         if (node.left != null) {
//             stack.push(node.left);
//         }
//         if (node.right != null) {
//             stack.push(node.right)
//         }
//     }
//     return ans;
// };

const depthFirstValues = (root) => {
    if (root == null) return [];
    let leftValues = depthFirstValues(root.left);
    let rightValues = depthFirstValues(root.right);

    return [root.val, ...leftValues, ...rightValues]
};





  
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(depthFirstValues(a)); 
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
