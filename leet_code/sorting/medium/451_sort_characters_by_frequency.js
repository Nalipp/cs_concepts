// Given a string, sort it in decreasing order based on the frequency of characters.
let frequencySort = function(s) {
  let objCounts = countObj(s);
  let arrCounts = Object.entries(objCounts);
  let sorted = arrCounts.sort((a, b) => b[1] - a[1]);
  let resultStr = '';
   
  for (let arr of sorted) {
    for (let i = 0; i < arr[1]; i++) {
      resultStr += arr[0];
    }
  }

  return resultStr;
};

let countObj = function(str) {
  let obj = {};
    
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj;
}

console.log(frequencySort("tree"));
// => "eert"

console.log(frequencySort("cccaaa"));
// => "cccaaa" or "aaaccc"

console.log(frequencySort("Aabb"));
// => "bbAa"
