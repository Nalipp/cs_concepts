function strStr(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (needle[j] === haystack[j + i]) {
          if (j + 1 === needle.length) return i;
        } 
        else break;
      }
    }
  }
  return -1;
}

console.log(strStr('hello', 'll'));
