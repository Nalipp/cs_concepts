
// 1 2 x3 4 5                                                        // 2
// 6 7 8 x9 10 11                                                    // 3
// 12 13 14 15 x16 17 18 19 20                                       // 4
// 21 22 23 24 25 26 x27 28 29 30 31 32                              // 6
// x x x x x x x x x |x x x x x x x x x                  (18 / 2)    // 9
// x x x x x x x x x x x x x x x x x x x x x x x x x x x (27 / 2)    // 13
// x x x x x x x x x x x x x x x x x x x x x x x x x x x (39 / 19)   // 19

var input = 1;    // 2
var input = 2;    // 5
var input = 3;
var input = 4;
// var input = 5;
// var input = 6;
// var input = 7;

let results = [2];
for (let i = 1; i < Number(input); i++) {
   results.push(Math.floor((results[results.length -1] * 3) / 2));
}
console.log(results.reduce((t, s) => t + s));


