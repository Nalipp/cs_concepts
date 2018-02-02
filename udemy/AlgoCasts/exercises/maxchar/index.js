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
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (hash[c]) hash[c] += 1;
    else hash[c] = 1;

    maxCount = Math.max(maxCount, hash[c]);
    maxChar = (maxCount > hash[c]) ? maxChar : c; 
  }
  return maxChar;
}

module.exports = maxChar;
