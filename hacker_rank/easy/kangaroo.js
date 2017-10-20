// the first kangarro starts at x1 and moves at a rate of v1 per jump
// the second kangarro starts at x2 and moves at a rate of v2 per jump

// if they can land on the same location at the same time (same number of jumps) return yes
// otherwise return no

// x1 v1 x2 v2
// 0  3  4  2 // yes

var kangaroo = (x1, v1, x2, v2) => {
  if () return 'NO';
  if () return 'YES';
  return 'NO';
}

// console.log(kangaroo(0, 3, 4, 2));  // YES
// console.log(kangaroo(1408, 6689, 6730, 4028)); // YES
console.log(kangaroo(4523, 8092, 9419, 8076)); // YES


// 0 -> 3 -> 6 -> 9 -> 12
// 4 -> 6 -> 8 -> 10 -> 12

// if x1 > x2 
//   then v2 must be > v1
//   else no
// if x2 > x1 
//   then v1 must be > v2
//   else no

// if v1 || v2 === 1 return yes

// xtotal = x1
// vtotal = v1
// while ( )
