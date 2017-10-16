
let minMaxSum = (arr) => {
  var min = Number.MAX_VALUE;
  var max = -Number.MIN_VALUE;
  var total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
    total += arr[i];
  }

  console.log(total - max, total - min);
}

let arr = [1, 2, 3, 4, 5]
minMaxSum(arr);

