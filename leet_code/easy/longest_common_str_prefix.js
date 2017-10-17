// Write a function to find the longest common prefix string amongst an array of strings.

var longestCommonPrefix = function(strs) {
  if (strs.length === 1) return strs[0];
  if (strs.length === 0) return '';

  let longestIndex = matchingCharsIndex(strs[0], strs[1]);

  for (let i = 2; i < strs.length; i++) {
    let currentIndex = matchingCharsIndex(strs[i - 1], strs[i]);
    longestIndex = (currentIndex < longestIndex) ? currentIndex : longestIndex;
  }

  function matchingCharsIndex(str1, str2) {
    index = 0;
    for (let i = 0; i < str1.length && i < str2.length; i++) {
      if (str1[i] === str2[i]) index = i + 1;
      else break;
    }
    return index;
  }
  return strs[0].slice(0, longestIndex);
}

console.log(longestCommonPrefix(['acbt', 'acep', 'acedi', 'aciope', 'd']));       // ''
console.log(longestCommonPrefix(['a', 'a']));                                     // 'a'
console.log(longestCommonPrefix(['a', 'b']));                                     // ''
console.log(longestCommonPrefix(['abicbt', 'abicep', 'abicedi', 'abiciope']));    // 'abic'
console.log(longestCommonPrefix(['abicet', 'abicepiabc', 'abicdibc', 'abiciope', 'abi']));      // 'abi'
console.log(longestCommonPrefix(['a']));                                          // 'a'
console.log(longestCommonPrefix(['']));                                           // ''


  // strs[0]
  // outer iteration starts 1
  //   index state start strs[0], strs[1]
  //   if index < index reassign

  // return slice

  // function check index
  //   inner iteration if strs0 === strs1 index +
