var singleNumber = function(nums) {
  let hash = {};
  for (let v of nums) {
    if (hash[v]) delete hash[v];
    else hash[v] = true;
  }
  let res = Object.keys(hash);
  return res.length ? Number(res[0]) : null;
};

console.log(singleNumber([3, 9, 8, 9, 3]));
