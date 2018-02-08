// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.insertFirst = function(val) {
  this.head = new Node(val, this.head);
}

LinkedList.prototype.size = function() {
  let count = 0;
  let node = this.head;
  while(node) {
    count += 1;
    node = node.next;
  }
  return count;
}

LinkedList.prototype.getFirst = function() {
  return this.head;
}

LinkedList.prototype.getLast = function() {
  return this.getAt(this.size() - 1);
}

LinkedList.prototype.clear = function() {
  this.head = null;
}

LinkedList.prototype.removeFirst = function() {
  if (!this.head) return null;
  this.head = this.head.next;
}

LinkedList.prototype.removeLast = function() {
  return this.removeAt(this.size() - 1);
}

LinkedList.prototype.insertLast = function(val) {
  return this.insertAt(val, this.size());
}

LinkedList.prototype.getAt = function(index) {
  if (!this.head) return null;
  let current = this.head;
  let counter = 0;
  while(current) {
    if (counter === index) return current;
    current = current.next;
    counter++;
  }
  return null;
}

LinkedList.prototype.removeAt = function(index) {
  if (!this.head) return null;
  if (index === 0) return this.head = this.head.next;
  let previous = this.getAt(index - 1);
  if (!previous) return null;
  if (previous.next && previous.next.next) {
    return previous.next = previous.next.next;
  }
  previous.next = null;
}

LinkedList.prototype.insertAt = function(data, index) {
  if (!this.head) return this.head = new Node(data);
  if (index <= 0) return this.head = new Node(data, this.head);
  let previous = this.getAt(index - 1) || this.getLast();
  previous.next = new Node(data, previous.next);
}

LinkedList.prototype.forEach = function(fn) {
  let current = this.head;
  while(current) {
    fn(current);
    current = current.next;
  }
}

module.exports = { Node, LinkedList };
