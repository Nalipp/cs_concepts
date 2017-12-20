// ****************************************************************************************************
// binary search


let binarySearch = (inputArray, value) => {
  let min = -1;
  let max = inputArray.length;
  let mid = Math.floor(max / 2)

  while (min + 1 < max) {
    let guess = inputArray[mid];
    if (value === guess) return mid;
    if (value < guess) max = mid;
    if (value > guess) min = mid;
    mid = Math.floor((max + min) / 2);        
  }
  return -1;
}

testList = [1,3,9,11,15,19,29,31]
testVal0 = 0;
testVal1 = 1;
testVal2 = 2;
testVal3 = 3;
testVal4 = 5;
testVal5 = 9;
testVal6 = 10;
testVal7 = 11;
testVal8 = 12;
testVal9 = 15;
testVal10 = 17;
testVal11 = 19;
testVal12 = 22;
testVal13 = 29;
testVal14 = 30;
testVal15 = 31;
testVal16 = 33;

console.log(binarySearch(testList, testVal0));
console.log(binarySearch(testList, testVal1));
console.log(binarySearch(testList, testVal2));
console.log(binarySearch(testList, testVal3));
console.log(binarySearch(testList, testVal4));
console.log(binarySearch(testList, testVal5));
console.log(binarySearch(testList, testVal6));
console.log(binarySearch(testList, testVal7));
console.log(binarySearch(testList, testVal8));
console.log(binarySearch(testList, testVal9));
console.log(binarySearch(testList, testVal10));
console.log(binarySearch(testList, testVal11));
console.log(binarySearch(testList, testVal12));
console.log(binarySearch(testList, testVal13));
console.log(binarySearch(testList, testVal14));
console.log(binarySearch(testList, testVal15));
console.log(binarySearch(testList, testVal16));
