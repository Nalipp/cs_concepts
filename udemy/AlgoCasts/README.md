# AlgoCasts

## run tests

$ jest fib/test.js --watch

or

$ jest fib --watch

## measure performance

```
  var start = new Date().getTime();

  ...

  var end = new Date().getTime();
  var time = end - start;
  console.log('Execution time: ' + time);
```

## debugging

type 'debugger' where you want to pause the code execution

$ node inspect <filename>;

$ c      // to continue

$ repl   // to access the variables

you have to exit repl, press c and re-enter repl to move through iterations??


## runtimes

O(1)         : constant time    -> No matter how many elements, the opperation will always take the same amount of time

O(log n)     : logarithmic time -> Doubling the number of elements doesn't double the amount of work (searhching algorithms)  

O(n)         : linear time      -> Iterating through each element in a collection of data

O(n * log n) : quasilinear time -> Doubling the number of elements doesn't double the amount of work (sorting algorithms)  

O(n^2)       : quadratic time   -> Every element has to be compared with every other element

O(2^n)       : exponential time -> Each element added doubles the processing power needed


## data structures

### Queue

Content comes in added to end and removed from the front (FIFO)
like waiting in line last in is last serverd

Enqueuing -> adding to the queue
Dequeuing -> removing from the queue

a Queue (according to the instructor) actually makes use of an array data structure but only exposes, add, remove, and peek functionality
```
  class Queue {
    constructor() {
      this.data = [];
    }
    add(val) {
      this.data.unshift(val);
    }
    remove() {
      return this.data.pop();
    }
    peek() {
      return this.data[this.data.length - 1];
    }
  }
```

### Stack

Content is pushed onto the top of the stack and removed fromthe top of the stack (LIFO)

## Trees

### Tree vs Binary Tree vs Binary Search Tree

Tree               -> each node can have many (an array) of children in any order

Binary Tree        -> each node can only have two children (right or left) but can be in any order

Binary Search Tree -> each node can only have two children and it must be ordered (such as small to left, large to right)


