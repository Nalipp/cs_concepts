function isRansom(m, n, magazine, ransom) {
  let obj = {};
  magazine.forEach((a) => {
    if (obj[a]) return obj[a] += 1;
    obj[a] = 1;
  });

  for (let i = 0; i < ransom.length; i++) {
    if (obj[ransom[i]] >= 1) obj[ransom[i]] -= 1;
    else return 'No';
  }
  return 'Yes';
}

var m = 6;
var n = 5;
var magazine = [ 'two', 'two', 'times', 'three', 'is', 'not', 'four' ];
var ransom = ['two', 'times', 'two', 'is', 'four'];
console.log(isRansom(m, n, magazine, ransom));                     // 'Yes'

var m = 6;
var n = 5;
var magazine = [ 'two', 'times', 'three', 'is', 'not', 'four' ];
var ransom = ['two', 'times', 'two', 'is', 'four'];
console.log(isRansom(m, n, magazine, ransom));                     // 'No'

var m = 6;
var n = 4;
var magazine = ['give', 'me', 'one', 'grand', 'today', 'night'];
var ransom = ['give', 'one', 'grand', 'today'];
console.log(isRansom(m, n, magazine, ransom));                     // 'Yes'


