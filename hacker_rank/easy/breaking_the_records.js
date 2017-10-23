// input
// 9
// 10 5 20 20 4 5 2 25 1

// output
// best worst
// 2    4

function getRecord(s){
  let bestRec = s[0];
  let worstRec = s[0];
  let bestCount = 0;
  let worstCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] > bestRec) {
      bestCount += 1;
      bestRec = s[i];
    }
    else if (s[i] < worstRec) {
      worstCount += 1;
      worstRec = s[i];
    }
  }

  return[bestCount, worstCount];
}

console.log(getRecord([10, 5, 20, 20, 4, 5, 2, 25, 1]));  // 2 4
console.log(getRecord([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));     // 4 0

