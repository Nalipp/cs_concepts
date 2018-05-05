let arr = [16, 14, 10, 3, 9, 7, 8, 1, 4, 2];

function heapSort(arr) {
  let mid = Math.floor((arr.length - 1) / 2);

  for (var i = mid; i >= 0; i -= 1) {
    swap(arr, i);
  }

  return arr;
}

function swap(arr, i) {
  if (i >= arr.length / 2) {
    return;
  }

  let minChild = minChildIdx(arr, i);

  if (arr[i] > arr[minChild]) {
    let temp = arr[minChild];
    arr[minChild] = arr[i];
    arr[i] = temp;
    swap(arr, minChild);
  }
}

function child1(i) {
  return (i * 2);
}

function child2(i) {
  return (i * 2) + 1;
}

function minChildIdx(arr, i) {
  return arr[child1(i)] > arr[child2(i)] ? child2(i) : child1(i);
}

console.log(heapSort(arr)); 

