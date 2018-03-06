// #1 house robber
// bottom up db for house robber

// function goldTheif(arr) {
//   if (!arr.length) return 0;
//   if (arr.length === 1) return arr[0];

//   let p2 = arr[0];
//   let p1 = 0;
//   let c = Math.max(p2, p1);

//   for (let i = 1; i < arr.length; i++) {
//     p2 = p1 + arr[i];
//     p1 = c;
//     c = Math.max(p2, p1);
//   }
//   return Math.max(c, p1);
// }

// console.log(goldTheif([-7, -1, 3, -4, -23, -22]));

function goldTheif(arr) {
  let hash = {};

  function inner(i) {
    if (hash[i] != undefined) return hash[i];
    if (!arr[i]) return;

    hash[i + 1] = inner(i + 1);
    hash[i + 2] = inner(i + 2) + arr[i];

    return Math.max(hash[i + 1], hash[i + 2]);
  }
  return inner(0);
}

console.log(goldTheif([7, 1, 3, 5, 10, 22, 9]));


  // if (!arr[i]) return sum;
  // let x;
  // let y;

  
// function goldTheif(arr, i = 0, sum = 0, hash = {}) {
//   if (hash[i + 1]) {
//     x = hash[i + 1];
//   } else {
//     x = hash[i + 1] = goldTheif(arr, i + 1, sum);
//   }

//   if (hash[i + 2]) {
//     y = hash[i + 2];
//   } else {
//     y = hash[i + 2] = goldTheif(arr, i + 2, sum + arr[i]); 
//   }

//   console.log(hash);

//   return Math.max(x, y);
// }

// let fib = (n, hash={}, count=0) => { 
//   console.log(count); 

//   if (n <= 1) return n;
//   let x;
//   let y;

//   x = hash[n - 1] ? hash[n - 1] : hash[n - 1] = fib(n - 1, hash, count += 1);
//   y = hash[n - 2] ? hash[n - 2] : hash[n - 2] = fib(n - 2, hash, count += 1);

//   return x + y;
// }

// console.log(fib(10));

// let fib = (n, hash={}, count=0) => { 
//   console.log(count++);

//   if (n <= 1) return n;
//   let x;
//   let y;

//   if (hash[n - 1]) {
//     x = hash[n - 1];
//   } else {
//     x = hash[n - 1] = fib(n - 1, hash, count); 
//   }

//   if (hash[n - 2]) {
//     x = hash[n - 2];
//   } else {
//     x = hash[n - 2] = fib(n - 2, hash, count); 
//   }

//   return x + y;
// }

// console.log(fib(10));




