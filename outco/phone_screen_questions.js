

/*

Problem 1
find the lengh of the longest consecutive decreasing numbers
  [2, 4, 9, 6, -4, -7, 1, 10] => 4

*/

function longestDecrease(arr) {
  let maxDecrease = 0;
  let currentDecrease = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      currentDecrease += 1;
      maxDecrease = Math.max(maxDecrease, currentDecrease);
    } else {
      currentDecrease = 1;
    }
  }
  return maxDecrease;
}

console.log(longestDecrease([2, 4, 9, 6, -4, -7, 1, 10]));


/*

Problem 2

reverseVowels(word) - Given an array of characters, 
reverse the vowels but keep the consonants in place.

Space complexity: O(1)
Time complexity: O(N)
Example: ["w","h","i","t","e","b","o","a","r","d"] ->
         ["w","h","a","t","o","b","e","i","r","d"]
unsorted
return length
*/

function reverseVowels(nums) {
  let i = 0;
  let j = nums.length;
  let lookup = 'aeiou';
  let temp;
  while (i < j) {
    if (lookup.includes(nums[i])) {
      while (!lookup.includes(nums[j])) j--;
      temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j--;
    }
    i++;
  }
  return nums;
}

console.log(reverseVowels(["w","h","i","t","e","b","o","a","r","d"]))
/*
find the lengh of the longest consecutive decreasing numbers
  [2, 4, 9, 6, -4, -7, 1, 10] => 4
*/

function longestDecrease(arr) {
  let maxDecrease = 0;
  let currentDecrease = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      currentDecrease += 1;
      maxDecrease = Math.max(maxDecrease, currentDecrease);
    } else {
      currentDecrease = 1;
    }
  }
  return maxDecrease;
}

console.log(longestDecrease([2, 4, 9, 6, -4, -7, 1, 10]));


/*
reverseVowels(word) - Given an array of characters, 
reverse the vowels but keep the consonants in place.

Space complexity: O(1)
Time complexity: O(N)
Example: ["w","h","i","t","e","b","o","a","r","d"] ->
         ["w","h","a","t","o","b","e","i","r","d"]
unsorted
return length
*/

function reverseVowels(nums) {
  let i = 0;
  let j = nums.length;
  let lookup = 'aeiou';
  let temp;
  while (i < j) {
    if (lookup.includes(nums[i])) {
      while (!lookup.includes(nums[j])) j--;
      temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j--;
    }
    i++;
  }
  return nums;
}

console.log(reverseVowels(["w","h","i","t","e","b","o","a","r","d"]))
