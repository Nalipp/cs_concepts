
// Example 1:

// Input: 

// [[1,1,0],
//  [1,1,0],
//  [0,0,1]]

// Output: 2

// Explanation:The 0th and 1st students are direct friends, so they are in a friend circle. 
// The 2nd student himself is in a friend circle. So return 2.



// Example 2:

// Input
// [[1,1,0],
//  [1,1,1],
//  [0,1,1]]

// Output: 1

// Explanation:The 0th and 1st students are direct friends, the 1st and 2nd students are direct friends, 
// so the 0th and 2nd students are indirect friends. All of them are in the same friend circle, so return 1.

let t1 = [[1,1,0],
          [1,1,0],
          [0,0,1]];
 
let t2 = [[1,1,0],
          [1,1,1],
          [0,1,1]];

var findCircleNum = function(M) {

};

findCircleNum(t1);


// function node(id) {
//   this.id = id;
//   this.friends = [];
// }

// let n0 = new node(0);
// let n1 = new node(1);
// let n2 = new node(2);
// let n3 = new node(3);
// let n4 = new node(4);
// let n5 = new node(5);
// let n6 = new node(6);
// let n7 = new node(7);
// let n8 = new node(8);
// let n9 = new node(9);

// n0.friends = [n4];
// n1.friends = [n2];
// n2.friends = [n1, n7];
// n3.friends = [n4];
// n4.friends = [n3, n8];
// n5.friends = [n6, n9];
// n6.friends = [n5, n9];
// n7.friends = [n2];
// n8.friends = [n4];
// n9.friends = [n5, n6];

// let classmates = [n0, n1, n2, n3, n4, n5, n6, n7, n8, n9];

// function countCircles(classmates) {
//   let count = 0;
//   let seen = [];
//   for (let v of classmates) seen.push(0);

//   for (let i = 0; i < classmates.length; i++) {
//     if (seen[i] === 0) {
//       seen[i] = 1;
//       function findFriends(user) {
//         for (let friend of user.friends) {
//           if (seen[friend.id] === 0) {
//             seen[friend.id] = 1;
//             findFriends(friend);
//           }
//         }
//       }
//       findFriends(classmates[i]);
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(countCircles(classmates));
