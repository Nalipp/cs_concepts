let sortedArr = [2, 4, 6, 8, 10, 20, 23, 33];
let target = 23;

let binarySearch = (sortedArr, target) => {
  let start = 0;
  let end = sortedArr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (sortedArr[mid] === target) return mid;
    if (target < sortedArr[mid]) end = mid - 1;
    else start = mid + 1;
  }
  return false;
}

console.log(binarySearch(sortedArr, target));
