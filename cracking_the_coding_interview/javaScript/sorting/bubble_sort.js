function bubbleSort(arr) {
  let length = arr.length;
  let count = 0;
  while (length > 1) {
    let a = 0;
    let b = 1;
    let isDone = true;
    while (b < length) {
      if (arr[a] > arr[b]) {
        isDone = false;
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
      }
      a++;
      b++;
    }
    if (isDone) return arr;
    length--;
  }
  return arr;
}

console.log(bubbleSort([1, 2, 3, 5, 6, -4, 8, 7, 10]));
