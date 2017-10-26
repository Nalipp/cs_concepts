
// let printTotals = (n, arr1) => {
//   for (i = 0; i < n.length; i++) {
//     console.log(stairCombos(n[i] - 1), arr1[n]);
//   }
// }

// let stairCombos = (n, obj={}) => {
//   if (n === 0) return 1;
//   if (n === 1) return 2;
//   if (n === 2) return 4;

//   console.log(arr1[n]);

//   if (obj[n]) return obj[n];
//   return obj[n] = stairCombos(n - 3, obj) + stairCombos(n - 2, obj) + stairCombos(n - 1, obj);
// }

// var n = [ 1, 3, 7 ];    
// var arr1 = ['a', 'b', 'c'];
// printTotals(n, arr1);    // 44


// let printFib = (n) => {
//   for (var i = 0; i < n; i++) {
//     console.log(fib(i)); 
//   }
// }


var permArr = [];
var usedChars = [];
function permute(input) {
  var i; 
  var ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};

arr1 = ['a', 'b', 'c'];
arr2 = ['g', 'h', 'i'];
arr3 = ['m', 'n', 'o'];

console.log(permute(arr1));

// 0
// 1
// 1
// 2
// 3
// 5
// 8

// a
// ab
// ac
// b
// bc
// c
