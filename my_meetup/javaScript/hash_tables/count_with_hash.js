// Count the frequencies of elements in an array

// ['t', 'e', 't', 'r', 'e', 't'] 
//
// => 
//   {
//     t : 3,
//     e : 2,
//     r : 1
//   }



// **************************************************
// Your code
// **************************************************

function countWithHash(arr) {
  // code goes here
}


console.log(countWithHash(['t', 'e', 't', 'r', 'e', 't'])); 
// => { t: 3, e: 2, r: 1 }

console.log(countWithHash([5, 2, 0, 2, 2]));                
// => { '0': 1, '2': 3, '5': 1 }



//**************************************************
// Solution
// **************************************************


// function countWithHash(arr) {
//   var hash = {};

//   for (var ele of arr) {

//     if (!hash[ele]) {

//       hash[ele] = 1;
//     } else {

//       hash[ele] += 1;
//     }
//   }

//   return hash;
// }
