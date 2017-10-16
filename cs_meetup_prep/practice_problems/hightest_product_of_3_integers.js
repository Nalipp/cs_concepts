// Given an array of integers, find the highest product you can get from three of the integers.
// The input arrayOfInts will always have at least three integers.

// function highestProductOfThreeIntegers(integersArr) {
//   let sorted = integersArr.sort((a, b) => { return b - a });
//   return sorted[0] * sorted[1] * sorted[2];
// }

// console.log(highestProductOfThreeIntegers([3, 5, 7, 3, 4, 5, 9]));

function highestProductOfThreeIntegers(integersArr) {
  let maxThree = Array(3);
  for (let i = 0; i < integersArr.length; i++) {
    if (i < maxThree[maxThree.length - 1]) {
      maxThree.splice(0, 1);
      maxThree.push(
    }
  }
}

console.log(highestProductOfThreeIntegers([3, 5, 7, 3, 4, 5, 9]));

