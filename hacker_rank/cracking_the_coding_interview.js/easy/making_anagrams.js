let anagramDeletes = (str1, str2) => {
  let obj = {};

  str1.split('').forEach((a) => {
    if (obj[a] !== undefined) obj[a] += 1;
    else obj[a] = 1;
  });
  
  str2.split('').forEach((a) => {
    if (str1.includes(a)) obj[a] -= 1;
    else if (obj[a] === undefined) obj[a] = 1;
    else obj[a] += 1;
  });

  return Object.keys(obj).reduce((s, k) => {
    return s + Math.abs(obj[k]);
  }, 0);
}

var str1 = 'cde';
var str2 = 'abc';
console.log(anagramDeletes(str1, str2));  // 4

var str1 = 'bacdc';
var str2 = 'dcbac';
console.log(anagramDeletes(str1, str2));  // 0

var str1 = 'bacdca';
var str2 = 'dcbad';
console.log(anagramDeletes(str1, str2));  // 3

var str1 = 'dcbad';
var str2 = 'bacdca';
console.log(anagramDeletes(str1, str2));  // 3

var str1 = 'fcrxzwscanmligyxyvym';
var str2 = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke';
console.log(anagramDeletes(str1, str2));  // 30

