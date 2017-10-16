// recursion

// let linearSearch = (num, arr, index=0) => {
//   if (arr[index] === num) return index;
//   if (arr.length === index) return -1;
//   index += 1;
//   return linearSearch(num, arr, index);
// }

// let numsArr = [1, 5, 3, 8, 7, 80];

// console.log(linearSearch(80, numsArr));

// iteration

let linearSearch = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
}

let numsArr = [1, 5, 3, 8, 7, 80];
console.log(linearSearch(numsArr, 90));
