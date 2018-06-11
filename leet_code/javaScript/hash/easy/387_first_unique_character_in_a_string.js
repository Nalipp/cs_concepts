// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

var firstUniqChar = function(s) {
  var objCounts = countObj(s);

  for (var i = 0; i < s.length; i++) {
    var char = s[i];

    if (objCounts[char] === 1) {
      return i;
    }
  }

  return -1;
};

var countObj = function(str) {
  var obj = {};

  for (var i = 0; i < str.length; i++) {
    var key = str[i];

    if (obj[key]) {
      obj[key] += 1;
    } else {
      obj[key] = 1;
    }
  }

  return obj;
}

console.log(firstUniqChar("leetcode"));
// => 0

console.log(firstUniqChar("loveleetcode"));
// => 2
