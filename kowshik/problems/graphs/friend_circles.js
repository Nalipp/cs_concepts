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

n0.friends = [4];
n1.friends = [2];
n2.friends = [1, 7];
n3.friends = [4];
n4.friends = [3, 8];
n5.friends = [6, 9];
n6.friends = [5, 9];
n7.friends = [2];
n8.friends = [4];
n9.friends = [5, 6];

let users = [n1, n2, n3, n4, n5, n6, n7, n8, n9];

function iterate(users) {
  let count = 0;
  let seen = [];
  for (let v of users) seen.push(0);
  for (let i = 0; i < users.length; i++) {
    if (seen[i] === 0) {
      seen[i] = 1;
      function findFriends(friends) {
        for (let friend of friends) {
          if (seen[friend] === 0) {
            seen[friend] = 1;
            findFriends(friend.friends);
          } 
        }
        count += 1;
      }
      findFriends(users[i].friends);
    }
  }
  return count;
}

console.log(iterate(users));
