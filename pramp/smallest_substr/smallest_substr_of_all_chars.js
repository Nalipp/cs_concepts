function getShortestUniqueSubstring(arr, str) {
  var shortest = '';
  var cur_str = '';
  
  for (var i = 0; i < str.length; i += 1) {
    for (var j = i; j < str.length; j += 1) {
      cur_str += str[j];                            // 'ADOBEC'
      
      if (containsAllChars(cur_str, arr)) {
        if (shortest.length === 0 || cur_str.length < shortest.length) {
          shortest = cur_str;
        }
        cur_str = '';
        break;
      }
    }
  }
  return shortest;
}

function containsAllChars(str, arr) {
  arr = arr.join('').toLowerCase().split('');
  str = str.toLowerCase();
  
  for (var char of arr) {
    if (str.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}

console.log(getShortestUniqueSubstring(['A'], '')); // => ''
console.log(getShortestUniqueSubstring(['A'], 'B')); // => ''
console.log(getShortestUniqueSubstring(['A'], 'A')); // => 'A'
console.log(getShortestUniqueSubstring(['A', 'B', 'C'], 'ADOBECODEBANCDDD')); // => 'BANC'
console.log(getShortestUniqueSubstring(["A","B","C","E","K","I"], 'KADOBECODEBANCDDDEI')); // => 'KADOBECODEBANCDDDEI'
console.log(getShortestUniqueSubstring(["x","y","z"], 'xyyzyzyx')); // => zyx
console.log(getShortestUniqueSubstring(["x","y","z","r"], 'xyyzyzyx')); // => ''


