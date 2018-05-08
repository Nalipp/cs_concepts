function getLeftChildIndex(parentIndex) return 2 * parentIndex + 1;
function getRightChildIndex(parentIndex) return 2 * parentIndex + 2;
function getParentIndex(childIndex) return Math.floor((childIndex - 1) / 2);

function hasLeftChild(parentIndex) return getLeftChildIndex(parentIndex) < arr.length;
function hasRightChild(parentIndex) return getRightChildIndex(parentIndex) < arr.length;
function hasParent(childIndex) return parent(childIndex) >= 0;

function rightChild(parentIndex) return arr[getRightChildIndex(parentIndex)];
function leftChild(parentIndex) return arr[getLeftChildIndex(parentIndex)];
function parent(childIndex) return arr[getParentIndex(childIndex)];

function peek() return arr[0];

function swap(idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function extractRoot() {
  var root = arr[0];
  swap(0, arr.length - 1)
  arr.pop();
  siftDown(0);

  return root;
}

function siftUp() {
  var idx = arr.length - 1;
  
  while (hasParent(idx) && parent(idx) > arr[idx]) {
    swap(getParentIndex(idx), idx);
    idx = getParentIndex(idx);
  }
}

function siftDown() {
  let index = 0;
  while (hasLeftChild(index)) {
    var smallerChildIndex = getLeftChildIndex(index);

    if (hasRightChild(index) && rightChild(index) < leftChild(index)) {
      smallerChildIndex = getRightChildIndex(index);
    }

    if (arr[index] < arr[smallerChildIndex]) {
      break;
    } else {
      swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
}

function insert(val) {
  arr.push(val);
  siftUp();
}

let arr = [3, 4, 8, 9, 7, 10, 9, 15, 20, 13];


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

// console.log('#rightChild');
// console.log(rightChild(3));  // => 20
// console.log(rightChild(4));  // => undefined

// console.log('#leftChild');
// console.log(leftChild(3));  // => 15
// console.log(leftChild(4));  // => 13

// console.log('#parent');
// console.log(parent(3));  // => 15
// console.log(parent(4));  // => 13

// console.log('#swap');
// console.log(arr);        // [ 3, 4, 8, 9, 7, 10, 9, 15, 20, 13 ]
// console.log(swap(1, 3)); 
// console.log(arr);        // [ 3, 9, 8, 4, 7, 10, 9, 15, 20, 13 ]

// console.log('#peek');
// console.log(peek());        // 3

// console.log('#extractRoot');
// console.log(arr); 
// extractRoot();
// console.log(arr); 

console.log('#extractRoot');
console.log(arr); 
extractRoot();
