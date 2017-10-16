
// var obj = {
//     data: {
//         info: {
//             innerData: {
//                 moreInfo: {
//                     name: "Bob"
//                 }
//             }
//         }
//     }
// }


// function recursive(obj) {
//   recursive(obj);  // will overflow the stack
// }

// recursive(obj);


// **************************************************
// example 1
// We will call this function sumRange. 
// It will take a number and return the sum of all numbers from 1 up to the number passed in. 
// For example, sumRange(3) should return 6, since 1 + 2 + 3 = 6.

// function sumRange(num) {
//   if (num === 1) return 1;
//   return num + sumRange(num-1);
// }

// stack

//             1
//         2 + sumRange(1)
//     3 + sumRange(2)
// 4 + sumRange(3);

// console.log(sumRange(4));

// **************************************************
// example 2
// power

// Write a function called power which takes in a base and an exponent. 
// If the exponent is 0, return 1. 
// Otherwise, return the result of the base multiplied by the power function to the exponent - 1. 
// You can think of it in terms of this example:

// 2^4 = 2 * 2^3;
// 2^3 = 2 * 2^2;
// 2^2 = 2 * 2^1;
// 2^1 = 2 * 2^0; // once our exponent is 0 we KNOW that the value is always 1!

// function power(base, exponent) {
//   if (exponent === 0) return 1;
//   return base * power(base, exponent-1);
// }

// console.log(power(3, 4));

// **************************************************
// example 3
// factorial(5); // 5 * 4 * 3 * 2 * 1 === 120

// 5 * factorial(4)
//     4 * factorial(3)
//         3 * factorial(2)
//             2 * 1

// function factorial(num) {
//   if (num === 1) return 1;
//   return num * factorial(num - 1);
// }

// console.log(factorial(5));

// function calculateSums(num) {
//   if (num === 1) return 1;
//   return num + calculateSums(num - 1);
// }

// console.log(calculateSums(8));
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36

// function calculatePow(base, exponent) {
//   if (exponent === 0) return 1;
//   return base * calculatePow(base, exponent - 1);
// }

// console.log(calculatePow(2, 3));

// function factoral(num) {
//   if (num === 0) return 1;
//   return num * factoral(num - 1);
// }

// console.log(factoral(5));

// let printDown = (num) =>  {
//   if (num === 0) return console.log(0);
//   console.log(num) 
//   printDown(num - 1);
// }

// printDown(9);

