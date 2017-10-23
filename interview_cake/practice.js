// var text = 'outside';
// function logIt(){
//   console.log(text);
//   let text = 'inside';
// };
// logIt();

// let sum = (a, b) => {
//   if (b) return a + b;
//   return function(n) {
//     return a + n;
//   }
// }

// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

let colt = {
  name: 'Colt',
  delayedGreeting: function() {
    console.log('outer this', this.name)    // Colt -> 'this' is the colt object
    setTimeout(function() { 
      console.log('inner this', this.name)  // undefined -> 'this' is the window object not the colt objet
    }.bind(this), 1000);
  }
}

colt.delayedGreeting();

