let insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i ++) {
    for (let j = arr.length; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j -1]] = [arr[j -1], arr[j]]
      }
    }
  }
  return arr;
}

var arr = [5, 3, 2, 4, 1, 5, 3, 4, 2, 3, 3, 4, 5, 8, 7, 77, 66, 5, 4, 32, 3, 4, 5, 6, 77, 6, 5, 4, 3, 2, 2, 2, 1, 9, 8, 7];
console.log(insertionSort(arr));
