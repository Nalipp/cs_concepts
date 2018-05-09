let HeapClass = function(arr) {
  this.heap = [];
}

HeapClass.prototype.getLeftChildIndex = function(parentIndex) { return 2 * parentIndex + 1; }
HeapClass.prototype.getRightChildIndex = function(parentIndex) { return 2 * parentIndex + 2; }
HeapClass.prototype.getParentIndex = function(childIndex) { return Math.floor((childIndex - 1) / 2); }

HeapClass.prototype.hasLeftChild = function(parentIndex) { return this.getLeftChildIndex(parentIndex) < this.heap.length; }
HeapClass.prototype.hasRightChild = function(parentIndex) { return this.getRightChildIndex(parentIndex) < this.heap.length; }
HeapClass.prototype.hasParent = function(childIndex) { return this.parentVal(childIndex) >= 0; }

HeapClass.prototype.rightChildVal = function(parentIndex) { return this.heap[this.getRightChildIndex(parentIndex)]; }
HeapClass.prototype.leftChildVal = function(parentIndex) { return this.heap[this.getLeftChildIndex(parentIndex)]; }
HeapClass.prototype.parentVal = function(childIndex) { return this.heap[this.getParentIndex(childIndex)]; }

HeapClass.prototype.peek = function() { return this.heap[0]; }
HeapClass.prototype.getHeap = function() { return this.heap; }

HeapClass.prototype.swap = function(idx1, idx2) {
  let temp = this.heap[idx1];
  this.heap[idx1] = this.heap[idx2];
  this.heap[idx2] = temp;
}

HeapClass.prototype.takeMin = function() {
  let root = this.heap[0];

  if (!root) throw new Error('heap is empty'); 

  this.swap(0, this.heap.length - 1)
  this.heap.pop();
  this.siftDown(0);

  return root;
}

HeapClass.prototype.siftUp = function() {
  let index = this.heap.length - 1;
  
  while (this.hasParent(index) && this.parentVal(index) > this.heap[index]) {
    this.swap(this.getParentIndex(index), index);
    index = this.getParentIndex(index);
  }
}

HeapClass.prototype.siftDown = function(index=0) {
  while (this.hasLeftChild(index)) {
    let smallerChildIndex = this.getLeftChildIndex(index);

    if (this.hasRightChild(index) && this.rightChildVal(index) < this.leftChildVal(index)) {
      smallerChildIndex = this.getRightChildIndex(index);
    }

    if (this.heap[index] < this.heap[smallerChildIndex]) {
      break;
    } else {
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
}

HeapClass.prototype.insert = function(val) {
  this.heap.push(val);
  this.siftUp();

  return val;
}

HeapClass.prototype.generateHeap = function(arr=[]) {
  for (let val of arr) {
    this.insert(val);
  }

  return this;
}

module.exports = new HeapClass;


