function bubbleSort(arr) {
  var len = arr.length;
  var lastSwap;
  var temp
  while (len != 0) {
    lastSwap = 0;
    for (var i = 1; i < len; i++) {
      if (arr[i - 1] > arr[i]) {
        // Swap the two elements
        temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
        lastSwap = i;
      }
    }
    len = lastSwap;
  }
  return arr
}

console.log(bubbleSort([1, 6, 4, 3, 2]));


