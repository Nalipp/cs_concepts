// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(num) {
  let mod = 10;
  let reversed = 0;
  let absNum = Math.abs(num);                                
  while (true) {
    let currentNum = Math.floor((absNum % mod) / (mod / 10));
    reversed = (reversed * 10) + currentNum;
    if (absNum % mod === absNum) break;
    mod *= 10;
  }
  return reversed * Math.sign(num);
}

module.exports = reverseInt;

// let reversed = Number((Math.abs(num) + '').split('').reverse().join(''));
// return reversed * Math.sign(num);

