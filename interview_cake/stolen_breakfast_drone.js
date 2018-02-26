function findUniqueIds(arr) {
  let uniqueId = 0;

  for (let v of arr) {
    uniqueId ^= v
  }
  
  return uniqueId;
}

let deliveredIdConfirmations = [9, 4, 7, 9, 8, 4, 8];

console.log(findUniqueIds(deliveredIdConfirmations));

  // let hash = {};
  // for (let v of arr) {
  //   if (hash[v]) delete hash[v];
  //   else hash[v] = true;
  // }
  // for (let k in hash) {
  //   if (hash[k]) return k;
  // }
  // return -1;
