// keeping track of mins

class Stack {
  constructor() {
    this.nodes = [];
    this.prevMins = [];
  }
  push(val) {
    this.nodes.push(val);
    if (!this.prevMins.length || val <= this.prevMins[this.prevMins.length - 1]) {
      this.prevMins.push(val);
    }
  }
  pop() {
    if (this.nodes[this.nodes.length - 1] === this.prevMins[this.prevMins.length - 1]) {
      this.prevMins.pop();
    }
    this.nodes.pop();
  }
  getMin() {
    return this.prevMins[this.prevMins.length - 1];
  }
  peek() {
    return this.nodes[this.nodes.length - 1];
  }
}

let s1 = new Stack();
s1.push(8);
s1.push(9);
s1.push(10);
s1.push(5);
s1.push(3);
s1.push(3);

console.log(s1);

s1.pop();
s1.pop();

console.log(s1);




// key takeaways from last nights lesson

// when working with stacks it doesn't matter what data structure you use

