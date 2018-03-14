var judgeCircle = function(moves) {
  let h = 0;
  let v = 0;
  for (let i = 0; i < moves.length; i++) {
    let c = moves[i];
    if (c === 'U') h += 1;
    if (c === 'D') h -= 1;
    if (c === 'R') v += 1;
    if (c === 'L') v -= 1;
  }
  return h + v === 0;
};

// console.log(judgeCircle('UD')); 
// console.log(judgeCircle('UDLR')); 
// console.log(judgeCircle('UUDLR')); 
console.log(judgeCircle('LL')); 
