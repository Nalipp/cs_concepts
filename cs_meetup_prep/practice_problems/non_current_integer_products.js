// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

// For example, given:
//   [1, 7, 3, 4]

// your function would return:
//   [84, 12, 28, 21]

// by calculating:
//   [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]


// function getProductsOfAllIntsExceptAtIndex(integers) {
//   let resultProducts = [];
  
//   for (let i = 0; i < integers.length; i++) {
//     let integersCopy = integers.slice();
//     let beforeIndexIntegers = [];
//     let afterIndexIntegers = [];

//     beforeIndexIntegers = integersCopy.slice(0, i);
//     afterIndexIntegers = integersCopy.slice(i + 1);

//     let allNonIndexIntegers = beforeIndexIntegers.concat(afterIndexIntegers);

//     let currentResult = allNonIndexIntegers.reduce((a, b) => {
//       return a * b;
//     });

//     resultProducts.push(currentResult);
//   }
//   return resultProducts;
// }

// console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4]));

// function getProductsOfAllIntsExceptAtIndex(integers) {
//   let resultProducts = [];

//   for (let i = 0; i < integers.length; i++) {
//     let integersCopy = integers.slice();
//     integersCopy.splice(i, 1);
//     let product = integersCopy.reduce((a, b) => {
//       return a * b;
//     });
//     resultProducts.push(product);
//   }
  
//   return resultProducts;
// }

// console.log(getProductsOfAllIntsExceptAtIndex([1, 0, 3, 4]));

// 7, 3, 4 = 84 
// 1, 3, 4 = 12
// 1, 7, 4 = 28
// 1, 7, 3 = 21

