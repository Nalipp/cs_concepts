var largeGroupPositions = function(S) {
  var curCount = 1;
  var results = [];

  for (var i = 0; i < S.length; i += 1) {
    var char = S[i];

    if (char === S[i + 1]) {
      curCount += 1;
    } else {
      if (curCount >= 3) {
        results.push([i - curCount + 1, i]);
      }
      curCount = 1;
    }
  }

  return results;
};

console.log(largeGroupPositions("abcdddeeeeaabbbcd"));// => [[3,5],[6,9],[12,14]]
console.log(largeGroupPositions("aaa"));// => [[0, 2]]

