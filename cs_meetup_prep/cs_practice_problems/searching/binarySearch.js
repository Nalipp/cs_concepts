// iteration

let binarySearch = (arr, key) => {
  if (arr[0] === key) return 0;

  let li = 0;
  let ri = arr.length;

  while (arr.slice(li, ri).length > 1) {
    let mi = Math.floor((li + ri) / 2);
    if (key === arr[mi]) return mi;

    if (key < arr[mi]) ri = mi;
    if (key > arr[mi]) li = mi;
  }

  return -1;
}

arr = [-2, -9, -3, 1, 3, 8, 9, 11, 13, 44, 98, 102, 122, 198, 200, 300, 400, 500, 600, 710, 720, 730, 740, 750, 760, 770, 780, 790];
key = -9;
console.log(binarySearch(arr, key));


// recursion

// let binarySearch = (arr, num, li=0, ri=arr.length) => {
//   let mi = Math.floor((li + ri) / 2);
    
//   if (num === arr[mi]) return mi;
//   if (arr.slice(li, ri).length <= 1) return -1;

//   if (num < arr[mi]) return binarySearch(arr, num, li, mi);
//   return binarySearch(arr, num, mi, ri);
// }

// arr = [1, 3, 8, 9, 11, 13, 44, 98, 102, 122, 198, 200, 300, 400, 500, 600, 710, 720, 730, 740, 750, 760, 770, 780, 790];
// num = 790;
// console.log(binarySearch(arr, num));

    // console.log('halfIndex : ', halfIndex);
    // console.log('maxIndex : ', maxIndex);
    // console.log('minIndex : ', minIndex);
    // console.log('copy : ', copy);
    // console.log('******************************'); 

