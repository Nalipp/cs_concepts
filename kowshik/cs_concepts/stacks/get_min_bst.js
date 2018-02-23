class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class Stack {
  constructor() {
    this.nodes = [];
    this.prevMins = null;
  }
}

Stack.prototype.add = function(val) {
  let newNode = new Node(val);

  if (!this.prevMins) {
    this.prevMins = newNode;
  } 
  else {
    let current = this.prevMins;
    while (current) {
      if (val <= current.val) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        else current = current.left;
      } 
      else {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        else current = current.right;
      }
    }
  }

  this.nodes.push(val);
  return this.nodes;
}

Stack.prototype.remove = function() {  
  if (!this.prevMins) return null;
  let val = this.nodes[this.nodes.length - 1];
  let prev;
  let current = this.prevMins;

  while (current) {
    if (val <= current.val) {
      if (current.val === val) prev.left = current.next;
      prev = current;
      current = current.left;
    } else {
      prev = current;
      if (current.val === val) prev.right = null;
      current = current.right;
    }
  }
  this.nodes.pop();
}

Stack.prototype.getMin = function() {  
  if (!this.prevMins) return null;
  let current = this.prevMins;

  while(current) {
    if (!current.left) return current.val;
    current = current.left;
  }
}

n1 = new Stack();
n1.add(6);
n1.add(3);
n1.add(3);
n1.add(9);
n1.add(1);
n1.add(10);

n1.remove(1);

console.log(JSON.stringify(n1.prevMins));
// console.log(n1.getMin());

// remove
// if there are values to the right find the lowest
//   replace current value with the lowest value to the right
//   this.right = lowestvalue
//   prev.right = null || prev.left = null 
