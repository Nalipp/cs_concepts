
// let selectionSort = (arr) => {
//   var swap;

//   for (let i = 0; i < arr.length; i++) {
//     let min = arr[i];
//     let newMin;
//     for (let j = i + 1; j < arr.length - i; j++) {
//       if (arr[j] < newMin) {
//         newMin = arr[j];
//       }
//     }
//     if (newMin < min) {
//       swap = arr[j - 1];
//       arr[j - 1] = arr[j];
//       arr[j] = swap;
//     }
//   }
//   return arr;
// }

// var arr = [5, 3, 2, 4, 1];
// // var arr = [5, 3, 2, 4, 1, 5, 3, 4, 2, 3, 3, 4, 5, 8, 7, 77, 66, 5, 4, 32, 3, 4, 5, 6, 77, 6, 5, 4, 3, 2, 2, 2, 1, 9, 8, 7];
// console.log(selectionSort(arr));


let insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (lowest !== i) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
  }
  return arr;
}

// var arr = [5, 3, 2, 4, 1];
var arr = [5, 3, 2, 4, 1, 5, 3, 4, 2, 3, 3, 4, 5, 8, 7, 77, 66, 5, 4, 32, 3, 4, 5, 6, 77, 6, 5, 4, 3, 2, 2, 2, 1, 9, 8, 7];
console.log(insertionSort(arr));
