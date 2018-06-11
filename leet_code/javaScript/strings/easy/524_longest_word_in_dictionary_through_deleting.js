var findLongestWord = function(s, d) {
  debugger;
  if (!s.length || !d.length) {
    return '';
  }

  var maxWord;

  for (var word of d) {
    var found = true;

    for (var i = 0; i < word.length; i += 1) {
      var char = word[i];

      if (s.indexOf(char) === - 1) {
        found = false;
      }
    }

    if (found) {
      if (!maxWord) {
          maxWord = word;
      }

      if (word.length > maxWord.length) {
        maxWord = word;
      }

      if (word.length === maxWord.length) {
        if (word < maxWord) {
          maxWord = word;
        }
      }
    }

    found = true;
  }

  return maxWord;
};

console.log(findLongestWord('abpcplea', ['ale', 'apple', 'monkey', 'plea']));
// => 'apple'

console.log(findLongestWord('abpcplea', ["a","b","c"]));
// => 'a'

console.log(findLongestWord('', ["a","b","c"]));
// => ''

console.log(findLongestWord("bab", ["ba","ab","a","b"]));
// => "ab"
