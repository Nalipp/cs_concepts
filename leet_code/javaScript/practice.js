// let findIndicesOfTarget = (nums, target) => {
//   let map = new Map;
//   for (let i = 0; i < nums.length; i++) {
//     let diff = target - nums[i];
//     if (map.get(diff) !== undefined) return [map.get(diff), i];
//     map.set(nums[i], i);
//   }
// }

// var nums = [1, 4, 2, 6, 9];
// var target = 10;

// console.log(findIndicesOfTarget(nums, target));

var mySqrt = (x) => Math.floor(Math.sqrt(x));

console.log(mySqrt(3));
