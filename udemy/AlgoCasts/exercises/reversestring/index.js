// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let result = '';
  for (let character of str) {
    debugger;
    result = character + result;
  }
  return result;
}

module.exports = reverse;

// function reverse(str) {
//   return str.split('').reduce((a, v) => v + a);
// }
