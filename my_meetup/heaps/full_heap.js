var heap = [];

function getLeftChildIndex(parentIndex) { return 2 * parentIndex + 1; }
function getRightChildIndex(parentIndex) { return 2 * parentIndex + 2; }
function getParentIndex(childIndex) { return Math.floor((childIndex - 1) / 2); }

function hasLeftChild(parentIndex) { return getLeftChildIndex(parentIndex) < heap.length; }
function hasRightChild(parentIndex) { return getRightChildIndex(parentIndex) < heap.length; }
function hasParent(childIndex) { return parentVal(childIndex) >= 0; }

function rightChildVal(parentIndex) { return heap[getRightChildIndex(parentIndex)]; }
function leftChildVal(parentIndex) { return heap[getLeftChildIndex(parentIndex)]; }
function parentVal(childIndex) { return heap[getParentIndex(childIndex)]; }

function peek() { return heap[0]; }
function getHeap() { return heap }

function swap(idx1, idx2) {
  var temp = heap[idx1];
  heap[idx1] = heap[idx2];
  heap[idx2] = temp;
}

function takeMin() {
  var root = heap[0];
  swap(0, heap.length - 1)
  heap.pop();
  siftDown(0);

  return root;
}

function siftUp() {
  var index = heap.length - 1;
  
  while (hasParent(index) && parentVal(index) > heap[index]) {
    swap(getParentIndex(index), index);
    index = getParentIndex(index);
  }
}

function siftDown() {
  let index = 0;
  while (hasLeftChild(index)) {
    var smallerChildIndex = getLeftChildIndex(index);

    if (hasRightChild(index) && rightChildVal(index) < leftChildVal(index)) {
      smallerChildIndex = getRightChildIndex(index);
    }

    if (heap[index] < heap[smallerChildIndex]) {
      break;
    } else {
      swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
}

function insert(val) {
  heap.push(val);
  siftUp();
}

function generateHeap(arr) {
  for (var val of arr) {
    insert(val);
  }

  return heap;
}


module.exports = {
  insert: insert,
  takeMin: takeMin,
  peek: peek,
  generateHeap: generateHeap,
  getHeap: getHeap
}



// let heap = [3, 4, 8, 9, 7, 10, 9, 15, 20, 13];

// console.log('#getLeftChildIndex');
// console.log(getLeftChildIndex(0)); // => 1
// console.log(getLeftChildIndex(2)); // => 5
// console.log(getLeftChildIndex(4)); // => 9
// console.log(getLeftChildIndex(5)); // => 11

// console.log('#getRightChildIndex');
// console.log(getRightChildIndex(0)); // => 2
// console.log(getRightChildIndex(2)); // => 6
// console.log(getRightChildIndex(4)); // => 10 (undefined)

// console.log('#getParentIndex');
// console.log(getParentIndex(9)); // => 4
// console.log(getParentIndex(8)); // => 3
// console.log(getParentIndex(7)); // => 3
// console.log(getParentIndex(1)); // => 0

// console.log('#hasLeftChild');
// console.log(hasLeftChild(4));  // => true
// console.log(hasLeftChild(5));  // => false

// console.log('#hasRightChild');
// console.log(hasRightChild(3));  // => true
// console.log(hasRightChild(4));  // => false

// console.log('#hasParent');
// console.log(hasParent(3));  // => true
// console.log(hasParent(4));  // => false

// console.log('#rightChildVal');
// console.log(rightChildVal(3));  // => 20
// console.log(rightChildVal(4));  // => undefined

// console.log('#leftChildVal');
// console.log(leftChildVal(3));  // => 15
// console.log(leftChildVal(4));  // => 13

// console.log('#parentVal');
// console.log(parentVal(3));  // => 15
// console.log(parentVal(4));  // => 13

// console.log('#swap');
// console.log(heap);        // [ 3, 4, 8, 9, 7, 10, 9, 15, 20, 13 ]
// console.log(swap(1, 3)); 
// console.log(heap);        // [ 3, 9, 8, 4, 7, 10, 9, 15, 20, 13 ]

// console.log('#peek');
// console.log(peek());        // 3

// console.log('#takeMin');
// console.log(heap); 
// takeMin();
// console.log(heap); 

// console.log('#takeMin');
// console.log(heap); 
// console.log(takeMin());
// console.log(heap); 
