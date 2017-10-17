// Given an array of integers, find the highest product you can get from three of the integers.
// The input arrayOfInts will always have at least three integers.

let arrayOfInts = (arr) => {
  if (arr.length === 3) return arr.reduce((a, b) => a * b);
  var maxes = [arr[0], arr[1], arr[2]];

  for (let i = 3; i < arr.length; i++) {
    var currentMin = Math.min(maxes[0], maxes[1], maxes[2]);
    if (arr[i] > currentMin) {
      maxes[maxes.indexOf(currentMin)] = arr[i];
    }
  }
  return maxes.reduce((a, b) => a * b);
  // return maxes;
}

// var intArr = [2, 5, 8, 7, 4, 1]
// var intArr = [2, 5, 4]
// var intArr = [-2, -5, -4, -10]
// var intArr = [2, 0, 4, 9, 2, 1, -5, 0, 6, 4, 3, -9, 22, 1, 4, -12]

console.log(arrayOfInts(intArr));
