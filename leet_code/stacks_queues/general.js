var MyQueue = function() {
   this.stack1 = []; 
   this.stack2 = []; 
};

// Push element x to the back of queue. 
MyQueue.prototype.push = function(x) {
  this.moveToStack(2);
  this.stack2.push(x);    
};

// Removes the element from in front of queue and returns that element.
MyQueue.prototype.pop = function() {
  this.moveToStack(1);
  return this.stack1.pop();
};

MyQueue.prototype.moveToStack = function(num) {
  if (num === 1) {
    while (this.stack2.length) {
      this.stack1.push(this.stack2.pop());
    }
  } else {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
  }
}

MyQueue.prototype.peek = function() {
  if (this.stack1.length > this.stack2.length) {
    return this.stack1[this.stack1.length - 1] 
  } 
  if (this.stack2.length > this.stack1.length) {
    return this.stack2[0];
  }

  return null;
};

// * Returns whether the queue is empty.
MyQueue.prototype.empty = function() {
  return (this.stack1.length === 0 && this.stack2.length === 0); 
};

var obj = new MyQueue();

obj.push('nate')
obj.push('julia')
obj.push('hyeonu')
var param_2 = obj.pop()
console.log(param_2); 
console.log(obj); 
// var param_3 = obj.peek()
var param_4 = obj.empty()
console.log(obj.empty()); 
