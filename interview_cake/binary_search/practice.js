let binarySearch = (arr, target) => {
  let min = -1;
  let max = arr.length;

  while (min + 1 < max) {
    let distance = max - min;
    let middle = Math.floor(distance / 2);
    let guess = min + middle;

    if (arr[guess] === target) return guess;
    if (arr[guess] < target) min = guess;
    else max = guess;
  }
  return -1;
}

console.log(binarySearch([2, 4, 6, 7, 8, 9, 10], 0));   // -1
console.log(binarySearch([2, 4, 6, 7, 8, 9, 10], 1));   // -1
console.log(binarySearch([2, 4, 6, 7, 8, 9, 10], 2));   // 0
console.log(binarySearch([2, 4, 6, 7, 8, 9, 10], 3));   // -1
console.log(binarySearch([2, 4, 6, 7, 8, 9, 10], 4));   // 1
console.log(binarySearch([2, 4, 6, 7, 8, 9, 10], 5));   // -1
console.log(binarySearch([2, 4, 6, 7, 8, 9, 10], 6));   // 2
console.log(binarySearch([2, 4, 6, 7, 8, 9, 10], 7));   // 3
console.log(binarySearch([2, 4, 6, 7, 8, 9, 10], 8));   // 4
console.log(binarySearch([2, 4, 6, 7, 8, 9, 10], 9));   // 5
console.log(binarySearch([2, 4, 6, 7, 8, 9, 10], 10));  // 6
console.log(binarySearch([2, 4, 6, 7, 8, 9, 10], 11));  // -1


// let w1IsGreaterW2 = (w1, w2) => {
//   for (var i = 0; i < w1.length; i++) {
//     if (w1[i] !== w2[i]) return w1[i] > w2[i];
//   }
//   if (w2.length > w1.length) return false;
// }

// console.log(w1IsGreaterW2('undulate', 'xenoepist'));
