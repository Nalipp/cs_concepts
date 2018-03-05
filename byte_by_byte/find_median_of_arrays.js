function findMedian(arr1, arr2) {
  let combined = [];
  let copy1 = arr1.slice();
  let copy2 = arr2.slice();

  while (copy1.length && copy2.length) {
    if (copy1[0] >= copy2[0]) {
      combined.push(copy2.shift());
    } else {
      combined.push(copy1.shift());
    }
  }

  while (copy1.length) {
    combined.push(copy1.shift());
  }
  while (copy2.length) {
    combined.push(copy2.shift());
  }

  if (combined.length % 2 === 0) {
    let highIndex = combined.length / 2;
    return (combined[highIndex - 1] + combined[highIndex]) / 2;
  }
  let mid = Math.floor(combined.length / 2);
  return combined[mid];
}

let arr1 = [1, 3, 5, 10];
let arr2 = [2, 4, 6];

console.log(findMedian(arr1, arr2));

// function findMedian(arr1, arr2) {
//   let combined = [...arr1, ...arr2];
//   let sorted = combined.sort((a, v) => a - v);
//   if (sorted.length % 2 === 0) {
//     let highIndex = sorted.length / 2;
//     return (sorted[highIndex - 1] + sorted[highIndex]) / 2;
//   }
//   let mid = Math.floor(sorted.length / 2);
//   return sorted[mid];
// }

