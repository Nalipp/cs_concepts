let whichAppearsTwice = (n) => {
  let m = n[n.length - 1];
  let totalShouldBe = ((m * m) + m) / 2;

  let actualTotal = n.reduce((a, b) => a + b);
  return  actualTotal - totalShouldBe;
}

console.log(whichAppearsTwice([1, 2, 3, 3, 4, 5]));  // 15
console.log(whichAppearsTwice([1, 2, 2, 3, 4,]));    // 10
console.log(whichAppearsTwice([1, 1, 2, 3]));        // 6


// let magicTriangle = (n) => {
//   let m = (n.length * (n.length + 1)) / 2;
//   let addNum = (n[0] - 1) * n.length;
//   return addNum + m;
// }

// console.log(magicTriangle([1, 2, 3, 4, 5, 6]));  // 21
// console.log(magicTriangle([2, 3, 4, 5, 6, 7]));  // 27
// console.log(magicTriangle([3, 4, 5, 6, 7, 8]));  // 33
// console.log(magicTriangle([4, 5, 6, 7, 8, 9]));  // 39


// let whichAppearsTwice = (n) => {
//   for (let i = 0; i < n.length; i++) {
//     if (n.slice(i + 1).indexOf(n[i]) !== -1) return n[i];
//   }
// }

// console.log(whichAppearsTwice([1, 2, 3, 3, 4, 5]));  // 3
// console.log(whichAppearsTwice([1, 2, 3, 3, 4,]));    // 3
// console.log(whichAppearsTwice([1, 1, 2, 3]));        // 1
