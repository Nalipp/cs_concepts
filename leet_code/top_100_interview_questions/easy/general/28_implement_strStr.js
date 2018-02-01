// Implement strStr().
// Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

var strStr = (haystack, needle) => haystack.indexOf(needle);

console.log(strStr('haystack', 't'));                 // 4
console.log(strStr('t', 't'));                        // 0
console.log(strStr('t', 'i'));                        // -1
console.log(strStr('', 'a'));                         // -1
console.log(strStr('a', ''));                         // 0
console.log(strStr('aaa', 'aa'));                     // 0
console.log(strStr('abcd', 'cd'));                    // 2
console.log(strStr('abcdefghiiijklmnop', 'iij'));     // 9
