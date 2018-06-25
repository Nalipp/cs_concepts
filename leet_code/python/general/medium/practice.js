function coinChange(arr, amt) {
  if (amt === 0) return 0;
  if (amt < 0) return -1;

  left = 1 + coinChange(arr, amt - arr[0])
  right = 1 + coinChange(arr.slice(1), amt - arr[1]) 

  if (left
}

console.log(coinChange([1, 2, 5], 11)); // => 3 
