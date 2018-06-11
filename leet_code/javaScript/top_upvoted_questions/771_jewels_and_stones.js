var numJewelsInStones = function(J, S) {
  let count = 0;
  let hash = {};
  for (let i = 0; i < J.length; i++) {
    if (!hash[J[i]]) hash[J[i]] = true;
  }
  for (let i = 0; i < S.length; i++) {
    if (hash[S[i]]) count += 1;
  }
  return count;
};

// console.log(numJewelsInStones('aA', 'aAAbbbb')); 
console.log(numJewelsInStones('z', 'ZZ')); 
