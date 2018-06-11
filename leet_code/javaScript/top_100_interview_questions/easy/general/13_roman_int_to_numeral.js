var intToRoman = function(s) {
  let symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let numerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let buildRoman = '';
  for (let i = 0; s > 0; i++) {
    while (s >= numerals[i]) {
      s = s - numerals[i];
      buildRoman += symbols[i];
    }
  }

  return buildRoman;
};

console.log(intToRoman(204));   // 'CCIV'
console.log(intToRoman(3999));  // 'MMMCMXCIX'
console.log(intToRoman(1319));  // 'MCCCXIX'
console.log(intToRoman(444));   // 'CDXLIV'
console.log(intToRoman(489));   // 'CDLXXXIX'
console.log(intToRoman(1111));  // 'MCXI'
