// time: O(n)
// space: O(n)
// let findMatchingNumbers = (arr1, arr2) => {
//   let arrObj = arrToObj(arr2);
//   let matches = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arrObj[arr1[i]]) matches.push(arr1[i]);
//   }
//   return matches;
// }

// let arrToObj = (arr) => {
//   let obj = {};
//   arr.forEach((v, i) => {
//     if (!obj[v]) obj[v] = i;
//   });
//   return obj;
// }

// time: O(n)
// space: O(1)
let findMatchingNumbers = (arr1, arr2) => {
  let j = 0;
  for (let i = 0; i < arr1.length; i++) {
    while (arr2[j] <= arr1[i]) {
      if (arr2[j] === arr1[i]) console.log(arr1[i]);
      j++;
    }
  }
}

arr1 = [4, 9, 12, 14, 26];
arr2 = [3, 4, 11, 13, 14, 26];

findMatchingNumbers(arr1, arr2);
