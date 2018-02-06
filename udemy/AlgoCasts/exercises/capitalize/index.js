// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = str[0].toUpperCase();  // 1000

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') result += str[i].toUpperCase();
    else result += str[i];
  }

  return result;
}

// let start = new Date().getTime();

// console.log(capitalize('hi there'.repeat(500000)));

// let end = new Date().getTime();

// console.log('total time', end - start); 

module.exports = capitalize;

  // let capitalized = str.split(' ').map(v => { // 1000
  //   return v[0].toUpperCase() + v.slice(1);
  // });
  
  // return capitalized.join(' ');
