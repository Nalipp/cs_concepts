// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

let Node = require('./node');

function levelWidth(root) {
  if (!root) return [0];
  let counts = [1];
  let children = root.children;
  while(children.length) {
    counts.push(children.length);
    let temp = [];
    for (let node of children) {
      temp.push(...node.children);
    }
    children = temp;
  }
  return counts;
}

module.exports = levelWidth;
