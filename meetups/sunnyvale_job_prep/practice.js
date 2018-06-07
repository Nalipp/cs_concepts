class Stack {
  constructor() {
    this.nodes = [];
    this.mins = [];
  }
}

Stack.prototype.push = function(val) {
  this.nodes.push(val);
  if (!this.mins.length || this.mins[this.mins.length - 1] > val) {
    this.mins.push(val);
  }
}

Stack.prototype.pop = function() {
  if (!this.nodes.length) new Error('There are no vales to pop');
  let val = this.nodes.pop();
  if (this.mins[this.mins.length - 1] === val) {
    this.mins.pop();
  }
}

Stack.prototype.getMin = function() {
  return this.mins[this.mins.length - 1];
}

Stack.prototype.peek = function() {
  return this.nodes[this.nodes.length - 1];
}

let s = new Stack();
s.push(20);
s.push(30);
s.push(10);
s.push(15);

console.log(s);

s.pop();
s.pop();

console.log(s.getMin());


// console.log(s);
