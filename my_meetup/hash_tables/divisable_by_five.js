function divisableByFive(arr) {
  var results = [];

  for (var i = 0; i < arr.length - 1; i++) {
    var first = arr[i];

    for (var j = i + 1; j < arr.length; j++) {
      var second = arr[j];
      var sum = first + second;

      if (sum % 5 === 0) {
        results.push([i, j]);
      }
    }
  }
  return results;
}

console.log(divisableByFive([2, 4, 7, 11, 0, 3, 1, 9])); // [[0, 5], [1, 3], [1, 6], [2, 5], [3, 7], [6, 7]];
