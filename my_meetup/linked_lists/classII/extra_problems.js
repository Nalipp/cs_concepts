// Write a program to find the node at which the intersection of two singly linked lists begins.

// Input :
// 1 - 2 - 3 - 4 - 5 \
//                    6 - 7 - 8
//             4 - 5 /

// Output : 6

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var l1 = new ListNode(1); 
var l2 = new ListNode(2); 
var l3 = new ListNode(3); 
var l4 = new ListNode(4); 
var l5 = new ListNode(5); 
var l6 = new ListNode(6); 
var l7 = new ListNode(7); 
var l8 = new ListNode(8); 

l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = l6;
l6.next = l7;
l7.next = l8;

var t1 = new ListNode(4);
var t2 = new ListNode(5);

t1.next = t2;
t2.next = l6;


function findIntersection(h1, h2) {
  // code here...
}

console.log(findIntersection(l1, t1));



// ************************************************************
// possible solutions


// function findIntersection(h1, h2) {
//   if (!h1 || !h2) return null;

//   var cur1 = h1;
//   var cur2 = h2;

//   while(cur1 !== cur2) {
//     if (!cur1) {
//       cur1 = h2;
//     } else {
//       cur1 = cur1.next;
//     }

//     if (!cur2) {
//       cur2 = h1;
//     } else {
//       cur2 = cur2.next;
//     }
//   }

//   return cur1.val;
// }


// function findIntersection(h1, h2) {
//   if (!h1 || !h2) return null;

//   var cur1 = h1;
//   var cur2 = h2;

//   while(cur1 !== cur2) {
//     cur1 = cur1 ? cur1.next : h2;
//     cur2 = cur2 ? cur2.next : h1;
//   }

//   return cur1.val;
// }
