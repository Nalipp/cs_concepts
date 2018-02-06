// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let maxChar;
  let maxCount = 0;
  let hash = {};
  for (let char of str) {
    hash[char] = hash[char] + 1 || 1;

    maxCount = Math.max(maxCount, hash[char]);
    maxChar = (maxCount > hash[char]) ? maxChar : char; 
  }
  return maxChar;
}

module.exports = maxChar;
