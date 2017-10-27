// let fib = (n, obj={}) => {
//   if (n <= 1) return n;


//   if (obj[n]) return obj[n];
//   console.log('computing fibRecursive(' + n + ')');
//   return obj[n] = fib(n - 1, obj) + fib (n - 2, obj);
// }

// console.log(fib(0)); // 0
// console.log(fib(1)); // 1
// console.log(fib(2)); // 1
// console.log(fib(3)); // 2
// console.log(fib(4)); // 3
// console.log(fib(5)); // 5
// console.log(fib(6)); // 8
// console.log(fib(7)); // 13
// console.log(fib(8)); // 21

function Fibber() {
    this.memo = {};
}

Fibber.prototype.fib = function(n) {
    if (n < 0) throw new Error('Index was negative. No such thing as a negative index in a series.');
    if (n === 0 || n === 1) return n;

    if (this.memo[n]) {
      console.log('grabbing memo[' + n + ']');
      return this.memo[n];
    }

    console.log('computing fib(' + n + ')');
    return this.memo[n] = this.fib(n - 1) + this.fib(n - 2);
}

console.log(new Fibber().fib(0))  // 0
console.log('------');
console.log(new Fibber().fib(1))  // 1
console.log('------');
console.log(new Fibber().fib(2))  // 1
console.log('------');
console.log(new Fibber().fib(3))  // 2
console.log('------');
console.log(new Fibber().fib(4))  // 3
console.log('------');
console.log(new Fibber().fib(5))  // 5
console.log('------');
console.log(new Fibber().fib(6))  // 8
console.log('------');
console.log(new Fibber().fib(7))  // 13
console.log('------');
console.log(new Fibber().fib(8))  // 21

