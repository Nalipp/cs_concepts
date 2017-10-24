let printTotals = (s, n) => {
  for (i = 0; i < n.length; i++) {
    console.log(stairCombos(n[i] - 1));
  }
}

let stairCombos = (n, obj={}) => {
  if (n === 0) return 1;
  if (n === 1) return 2;
  if (n === 2) return 4;

  if (obj[n]) return obj[n];
  return obj[n] = stairCombos(n - 3, obj) + stairCombos(n - 2, obj) + stairCombos(n - 1, obj);
}

var s = 3;
var n = [ 1, 3, 7 ];    
printTotals(s, n);    // 44

// var s = 1;
// var n = 7;
// console.log(print(n));    // 44


// 1
//
// 1
// -> 1

// 2
//
// 11
// 2
// -> 2

// 3
//
// 111
// 21
// 12
// 3
// -> 4

// 4
//
// 1111
// 211
// 121
// 112
// 22
// 31
// 13
// -> 7

// 5
//
// 11111
// 2111
// 1211
// 1121
// 1112
// 221
// 122
// 212
// 32
// 23
// 311
// 131
// 113
// 
// -> 13

// 1 + 2 + 4 + 7 + 13 + 24 + 44
// 1   2   3   4   5    6    7

