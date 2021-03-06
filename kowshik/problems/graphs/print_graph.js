function node(id) {
  this.id = id;
  this.friends = [];
}

let n0 = new node(0);
let n1 = new node(1);
let n2 = new node(2);
let n3 = new node(3);
let n4 = new node(4);
let n5 = new node(5);
let n6 = new node(6);
let n7 = new node(7);
let n8 = new node(8);
let n9 = new node(9);

n0.friends = [n4];
n1.friends = [n2];
n2.friends = [n1, n7];
n3.friends = [n4];
n4.friends = [n3, n8];
n5.friends = [n6, n9];
n6.friends = [n5, n9];
n7.friends = [n2];
n8.friends = [n4];
n9.friends = [n5, n6];

let users = [n0, n1, n2, n3, n4, n5, n6, n7, n8, n9];

// without adjacency matrix

function iterate(users) {
  for (let i = 0; i < users.length; i++) {
    function findFriends(user) {
      if (user) {
        for (let friend of user.friends) {
          if (users[friend.id]) {
            console.log(friend.id);
            users[friend.id] = null;
            findFriends(friend);
          } 
        }
      }
    }
    if (users[i]) console.log(users[i].id);
    let temp = users[i];
    users[i] = null;
    findFriends(temp);
  }
}

iterate(users);

// with adjacency matrix

// function iterate(users) {
//   let seen = [];
//   for (let v of users) seen.push(0);
//   for (let i = 0; i < users.length; i++) {
//     if (seen[i] === 0) {
//       console.log(users[i].id);
//       seen[i] = 1;

//       function findFriends(user) {
//         for (let friend of user.friends) {
//           if (seen[friend.id] === 0) {
//             console.log(friend.id); 
//             seen[friend.id] = 1;
//             findFriends(friend);
//           } 
//         }
//       }
//       findFriends(users[i]);
//     }
//   }
// }



