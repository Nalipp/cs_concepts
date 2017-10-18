// Example1: x = 123, return 321
// Example2: x = -123, return -321

let reverseInt = (x) => {
  let reversed = 0;

  while (x !== 0) {
    reversed = (reversed * 10) + x % 10;
    if (reversed > 2147483647 || reversed < -2147483647) return 0;

    x = parseInt(x / 10)
  }

  return reversed;
}

let x = 123;
// let x = -123;
// console.log(typeof reverseInt(x));
console.log(reverseInt(x));
