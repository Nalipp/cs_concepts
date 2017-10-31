// n = 6 start number
// p = 2 end number
//
// 1 => 2, 3
// 2 => 4, 5
// 3 => 6, 7
// 4 => 8, 9
// 5 => 10, 11
//
// if page is odd she can see the page before it (even) 1-
// if the page is even she can see the page after it (odd) 1+
// each page turn gets an even and an odd (each set begins with even starting at 2)

function solve(n, p){
}

console.log(solve(6, 2)); // 1
console.log(solve(6, 4)); // 1
console.log(solve(5, 4)); // 0

