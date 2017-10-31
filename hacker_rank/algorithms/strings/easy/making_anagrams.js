function makingAnagrams(s1, s2){
  let totalDeletions = 0;
  let obj = new Map();

  for (let i = 0; i < s1.length; i++) {
    let v = s1[i];
    if (obj[v]) obj[v] += 1;
    else obj[v] = 1;
  }
  for (let i = 0; i < s2.length; i++) {
    let v = s2[i];
    if (obj[v]) obj[v] -= 1;
    else totalDeletions +=1;
  }

  let objSum = Object.keys(obj).reduce((s, k) => s + obj[k], 0);
  return totalDeletions += objSum;
}

var str1 = 'cde';
var str2 = 'abc';
console.log(makingAnagrams(str1, str2));  // 4

var str1 = 'bacdc';
var str2 = 'dcbac';
console.log(makingAnagrams(str1, str2));  // 0

var str1 = 'bacdca';
var str2 = 'dcbad';
console.log(makingAnagrams(str1, str2));  // 3

var str1 = 'dcbad';
var str2 = 'bacdca';
console.log(makingAnagrams(str1, str2));  // 3

var str1 = 'fcrxzwscanmligyxyvym';
var str2 = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke';
console.log(makingAnagrams(str1, str2));  // 30

