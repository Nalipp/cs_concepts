let permutationPalindrome = (str) => {
  let charSet = new Set();
  for (let i = 0; i < str.length; i++) {
    if (charSet.has(str[i])) charSet.delete(str[i]);
    else charSet.add(str[i]);
  }
  return charSet.size <= 1;
}

console.log(permutationPalindrome('civic'));  // true
console.log(permutationPalindrome('ivicc'));  // true
console.log(permutationPalindrome('civil'));  // false
console.log(permutationPalindrome('livci'));  // false




