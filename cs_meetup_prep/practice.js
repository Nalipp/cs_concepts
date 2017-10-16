// function highestProductOf3(arrayOfInts) {

//   if (arrayOfInts.length < 4) {
//     throw new Error('Less than 3 items!');
//   }

//   var highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
//   var lowest  = Math.min(arrayOfInts[0], arrayOfInts[1]);

//   var highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
//   var lowestProductOf2  = arrayOfInts[0] * arrayOfInts[1];

//   var highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
//   var lowestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

//   var highestProductOf4 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2] * arrayOfInts[3];

//   for (var i = 3; i < arrayOfInts.length; i++) {
//     var current = arrayOfInts[i];

//     highestProductOf4 = Math.max(
//       highestProductOf4, 
//       current * highestProductOf3, 
//       current * lowestProductOf3, 
//       current * highestProductOf2, 
//       current * lowestProductOf2
//     );

//     highestProductOf3 = Math.max(
//       highestProductOf3, 
//       current * highestProductOf2, 
//       current * lowestProductOf2
//     );

//     highestProductOf2 = Math.max(
//       highestProductOf2, 
//       current * highest, 
//       current * lowest
//     );

//     lowestProductOf2 = Math.min(
//       lowestProductOf2, 
//       current * highest, 
//       current * lowest
//     );

//     highest = Math.max(highest, current);
//     lowest = Math.min(lowest, current);
//   }

//   return highestProductOf3;
// }

// let arrOfInts = [2, 4, 5, 3, 1];
// console.log(highestProductOf3(arrOfInts));

// function getLargestItem(arrayOfItems) {
//   var largest = -Number.MAX_VALUE;
//   arrayOfItems.forEach(function(item) {
//     if (item > largest) {
//       largest = item;
//     }
//   });
//   return largest;
// }

// console.log(getLargestItem([4, 2, 5, 4, 8, 9, 4]));

// var twoSum = function(nums, target) {
//   for(i = 0; i < nums.length; i++) {
//     let neededNum = target - nums[i];
//     let copy = nums.slice();
//     copy[i] = null;
//     if (copy.indexOf(neededNum) !== -1) {
//       return [i, copy.indexOf(neededNum)];
//     }
//   }
// };

// console.log(twoSum([-1, -2, -3, -4, -5], -8));

// function fibonacci(num) {
//   let result = [0, 1];
//   for (let i = 2; i < num; i++) {
//     result.push(result[i - 2] + result[i - 1]);
//   }
//   return result[result.length - 1];
// };

// console.log(fibonacci(10));

// function recursiveObj(obj) {
//   return obj;
// }

// var obj = {
//   data: {
//     info: {
//       innerData: {
//         moreInfo: {
//           name: "Bob"
//         }
//       }
//     }
//   }
// }

// console.log(recursiveObj(obj));

// sumRange(3) should return 6, since 1 + 2 + 3 = 6.

// function sumRange(num) {
//   if (num === 1) return 1;
//   return num + sumRange(num - 1);
// }

// console.log(sumRange(3));

// function power(base, exponent) {
//   if (exponent === 0) return 1;
//   return base * power(base, exponent - 1);
// }

// console.log(power(3, 3));

// function factoral(num) {
//   if (num === 1) return 1;
//   return num * factoral(num - 1);
// }

// console.log(factoral(4));

// function all(arr, comparable) {
//   for (let i = 0; i < arr.length; i++) {
//     if ((!comparable(arr[i]))) {
//       return console.log(false);
//     }
//   }
//   return console.log(true);
// }

// let greaterThan10 = function(num) { return num > 10; };
// let greaterThan5 = function(num) { return num > 5; };
// let greaterThan0 = function(num) { return num > 0; };

// let lessThan10 = function(num) { return num < 10; };
// let lessThan5 = function(num) { return num < 5; };
// let lessThan0 = function(num) { return num < 0; };

// let even = function(num) { return num % 2 === 0; };
// let odd = function(num) { return num % 2 !== 0; };

// let isNumber = function(num) { return typeof num === 'number' };
// let isString = function(num) { return typeof num === 'string' };


// all([1, 2, 6, 7, 5], greaterThan10);
// all([1, 2, 6, 7, 5], greaterThan5);
// all([1, 2, 6, 7, 5], greaterThan0);
// console.log('--------------------');
// all([1, 2, 6, 7, 5], lessThan10);
// all([1, 2, 6, 7, 5], lessThan5);
// all([1, 2, 6, 7, 5], lessThan0);
// console.log('--------------------');
// all([2, 2, 6, 4, 10], even);
// all([1, 2, 6, 4, 10], even);
// all([1, 3, 5, 7, 5], odd);
// all([1, 2, 6, 7, 5], odd);
// console.log('--------------------');
// all([1, 2, 6, 7, 5], isNumber);
// all([1, 2, 6, 7, 5], isString);
// all(['1', '2', '6', '7', '5'], isString);


// function allRecursive(array, condition) {
//   var copy = array.slice();  

//   function allRecursiveHelper(arr, cb){

//     if (arr.length === 0) return console.log('true');

//     if (condition(arr[0])){
//       arr.shift();
//       return allRecursive(arr,condition);
//     } else {
//       return console.log('false');
//     }

//   }

//   return allRecursiveHelper(copy, condition);
// }

// allRecursive([1,2,3,4,5], function(v) { return v > 0 });



// function allRecursive(array, condition) {
//   let copy = array.slice();

//   function allRecursiveHelper(arr, condition) {
//     if (arr.length === 0) return console.log(true);
//     if (condition(arr[0])) {
//       arr.shift()
//       allRecursiveHelper(arr, condition);
//     } else {
//       return console.log(false); 
//     }
//   }

//   allRecursiveHelper(copy, condition);
// }


// let greaterThan0 = function(v) { return v > 0 };
// let greaterThan5 = function(v) { return v > 5 };

// allRecursive([1,2,3,4,5], greaterThan0);
// allRecursive([1,2,3,4,5], greaterThan5);

// function allRecursive(arr, num, condition) {
//   if (num === 0) return console.log(true);
//   if (condition(arr[num])) return allRecursive(arr, num - 1, condition)
//   if (!condition(arr[num])) return console.log(false);
// }

// var greaterThan0 = function(v) { return v > 0 };
// var greaterThan3 = function(v) { return v > 3 };
// var greaterThan5 = function(v) { return v > 5 };

// var arr = [1,2,3,4,5];
// allRecursive(arr, arr.length - 1, greaterThan0);
// allRecursive(arr, arr.length - 1, greaterThan5);
// var arr = [4,5];
// allRecursive(arr, arr.length - 1, greaterThan3);

// function allRecursive(array, condition) {
//     var copy = copy || array.slice();
//     if (copy.length === 0) return console.log(true);
//     if (condition(copy[0])){
//         copy.shift();
//         return allRecursive(copy,condition);
//     } else {
//         return console.log(false);
//     }
// }

// function allRecursive(arr, condition) {
//   var copy = copy || arr.slice();
//   if (copy.length === 0) return console.log(true);
//   if (condition(copy[0])) {
//     copy.shift();
//     return allRecursive(copy, condition);
//   }
//   return console.log(false);
// }

// var greaterThan0 = function(v) { return v > 0 };
// var greaterThan3 = function(v) { return v > 3 };
// var greaterThan5 = function(v) { return v > 5 };

// var arr = [1,2,3,4,5];
// allRecursive(arr, greaterThan0);
// allRecursive(arr, greaterThan5);
// var arr = [4,5];
// allRecursive(arr, greaterThan3);

