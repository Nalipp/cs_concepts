// function sum(num) {
//   if (num === 1) return num;
//   return num + sum(num - 1);
// }
// console.log(sum(4)) // (4 + 3 + 2 + 1) = 10

// function sum(min, max) {
//   if (min > max) return 0;
//   return min + sum(min + 1, max);
// }

// console.log(sum(4, 7)) // (4 + 5 + 6 + 7) = 22

// function sum(n, max) {
//   if (n === max) return 0;
//   return n + sum(max*(max+1) / 2)
// }


// console.log(sum(4, 7)) // (4 + 5 + 6 + 7) = 22

// var arr1 = "john".split('');  
// var arr2 = arr1.reverse();    
// var arr3 = "jones".split('');
// arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// // console.log(arr2.length);
// // console.log(arr2.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));


let printFib = (n) => {
  let obj = {};
  for (let i = 0; i < n; i++) {
    console.log(fib(i, obj));
  }
}

let fib = (n, obj) => {
  if (n <= 1) return n;

  if (obj[n]) return obj[n];
  
  obj[n] = fib(n - 1, obj) + fib(n - 2, obj);
  return obj[n];
}

// printFib(8, {});
console.log(fib(8, {}));

// 0 1 1 2 3 5 8 13
