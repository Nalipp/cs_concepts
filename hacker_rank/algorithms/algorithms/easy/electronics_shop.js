function getMoneySpent(keyboards, drives, s){
  let maxCost = -1;

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let currentTotal = keyboards[i] + drives[j];
      if (currentTotal <= s && currentTotal > maxCost) maxCost = currentTotal; 
    }
  }

  return maxCost;
}
var keyboards = [ 3, 1 ];
var drives = [ 5, 2, 8 ];
var s = 10;
console.log(getMoneySpent(keyboards, drives, s));

var keyboards = [ 4 ];
var drives = [ 5 ];
var s = 5;
console.log(getMoneySpent(keyboards, drives, s));

// 10 2 3
// 3 1
// 5 2 8
// // 9

// 5 1 1
// 4
// 5
// // -1

