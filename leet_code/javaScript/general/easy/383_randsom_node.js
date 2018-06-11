var canConstruct = function(ransomNote, magazine) {
  var obj = {};

  for (var i = 0; i < magazine.length; i += 1) {
    var magChar = magazine[i];

    if (obj[magChar] === undefined) {
      obj[magChar] = 1;
    } else {
      obj[magChar] += 1;
    }
  }

  for (var j = 0; j < ransomNote.length; j += 1) {
    var noteChar = ransomNote[j];

    if (!obj[noteChar]) {
      return false;
    }

    if (obj[noteChar] === 1) {
      delete obj[noteChar];
    } else {
      obj[noteChar] -= 1;
    }
  }
  
  return true;
};

console.log(canConstruct("a", "b")); //-> false
console.log(canConstruct("aa", "ab")); //-> false
console.log(canConstruct("aa", "aab")); //-> true
