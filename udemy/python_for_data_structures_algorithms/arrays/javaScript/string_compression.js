function compress(str) {
  var newStr = '';
  var count = 0;

  for (var i = 0; i < str.length; i += 1) {
    cur = str[i];
    next = str[i + 1];

    if (cur === next) {
      count += 1;
    } else {
      newStr += (cur + count)
      count = 1;
    }
  }

  return newStr;
}

console.log(compress('')) // => ''
console.log(compress('A')) // => 'A1'
console.log(compress('AABBCC')) // => 'A2B2C2' 
console.log(compress('AABBCCD')) // => 'A2B2C2D1' 
console.log(compress('AAABCCDDDDD')) // => 'A3B1C2D5'
