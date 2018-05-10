
let kthSmallest = function(matrix, k) {
  let results;
  let h1 = new HeapClass(matrix);
  h1.generateHeap();

  for (let row of matrix) {
    for (let num of row) {
      h1.insert(num);
    }
  }

  for (let count = 0; count < k; count++) {
    results = h1.takeMin();
  }

  return results;
};
