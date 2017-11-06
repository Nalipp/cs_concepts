let highestProductOfThree = (arr) => {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);                    

  let highestOf2 = arr[0] * arr[1];
  let lowestOf2 = arr[0] * arr[1];

  let highestOf3 = max * min * arr[2];

  for (let i = 2; i < arr.length; i++) {
    highestOf3 = Math.max(
      highestOf3,
      highestOf2 * arr[i],
      lowestOf2 * arr[i]
    );

    highestOf2 = Math.max(
      highestOf2,
      max * arr[i],
      min * arr[i]
    )

    lowestOf2 = Math.min(
      lowestOf2,
      max * arr[i],
      min * arr[i]
    )

    max = Math.max(max, arr[i]);
    min = Math.max(min, arr[i]);
  }

  return highestOf3;
}

console.log(highestProductOfThree([2, 3, 1, 5])); // 5 * 3 * 2 = 30
console.log(highestProductOfThree([1, 0, -2, -5])); // 1 * 0 * -2 = 0
console.log(highestProductOfThree([8, 30, 1, 50, 33, 3, -9])); // 5 * 3 * 2 = 30
// console.log(highestProductOfThree([2, 3, 1, 5])); // 5 * 3 * 2 = 30

// function highestProductOfThree(arrayOfInts) {
//     if (arrayOfInts.length < 3) throw new Error('Less than 3 items!');

//     var highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
//     var lowest  = Math.min(arrayOfInts[0], arrayOfInts[1]);

//     var highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
//     var lowestProductOf2  = arrayOfInts[0] * arrayOfInts[1];

//     var highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

//     for (var i = 2; i < arrayOfInts.length; i++) {
//         var current = arrayOfInts[i];

//         highestProductOf3 = Math.max(
//             highestProductOf3,
//             current * highestProductOf2,
//             current * lowestProductOf2
//         );

//         highestProductOf2 = Math.max(
//             highestProductOf2,
//             current * highest,
//             current * lowest
//         );

//         lowestProductOf2 = Math.min(
//             lowestProductOf2,
//             current * highest,
//             current * lowest
//         );

//         highest = Math.max(highest, current);
//         lowest = Math.min(lowest, current);
//     }

//     return highestProductOf3;
// }

// console.log(highestProductOfThree([2, 3, 1, 5])); // 5 * 3 * 2 = 30
// console.log(highestProductOfThree([1, 0, -2, -5])); // 1 * 0 * -2 = 0
// console.log(highestProductOfThree([8, 30, 1, 50, 33, 3, -9])); // 5 * 3 * 2 = 30
