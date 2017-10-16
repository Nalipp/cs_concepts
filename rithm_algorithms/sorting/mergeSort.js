function merge(arr1, arr2) {
  var results = [];
  var i = 0, j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (j === arr2.length || arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  return results;
}


function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  var mid = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, mid));
  var right = mergeSort(arr.slice(mid));

  return merge(left, right);
}


// var arr = [5, 3, 2, 4, 1];
var arr = [5, 3, 2, 4, 1, 5, 3, 4, 2, 3, 3, 4, 5, 8, 7, 77, 66, 5, 4, 32, 3, 4, 5, 6, 77, 6, 5, 4, 3, 2, 2, 2, 1, 9, 8, 7];
console.log(mergeSort(arr));
