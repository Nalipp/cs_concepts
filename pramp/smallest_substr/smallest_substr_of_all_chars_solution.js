function getShortestUniqueSubstring(arr, str) {
}

console.log(getShortestUniqueSubstring(['A'], '')); // => ''
console.log(getShortestUniqueSubstring(['A'], 'B')); // => ''
console.log(getShortestUniqueSubstring(['A'], 'A')); // => 'A'
console.log(getShortestUniqueSubstring(['A', 'B', 'C'], 'ADOBECODEBANCDDD')); // => 'BANC'
console.log(getShortestUniqueSubstring(["A","B","C","E","K","I"], 'KADOBECODEBANCDDDEI')); // => 'KADOBECODEBANCDDDEI'
console.log(getShortestUniqueSubstring(["x","y","z"], 'xyyzyzyx')); // => zyx
console.log(getShortestUniqueSubstring(["x","y","z","r"], 'xyyzyzyx')); // => ''


