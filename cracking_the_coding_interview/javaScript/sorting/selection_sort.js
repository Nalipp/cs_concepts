function selectionSort(arr, length = arr.length) {
  if (length === 1) return arr;
  let maxIndex = 0;
  for (let i = 1; i < length; i++) {
    if (arr[maxIndex] < arr[i]) maxIndex = i;
  }
  let temp = arr[maxIndex];
  arr[maxIndex] = arr[length - 1];
  arr[length - 1] = temp;
  return selectionSort(arr, length -= 1);
}

console.log(selectionSort([9, 2, 8, 5, 6, -4, 8, 7, 10]));
