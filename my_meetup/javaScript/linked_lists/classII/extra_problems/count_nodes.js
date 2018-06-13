// *****************************************************
// Count nodes

// Return the number of nodes in a linked list
// https://repl.it/@nateplipp/LinkedListCountNodes

// Input: 1 -> 2 -> 3 -> 4
// Output: 4


function ListNode(val) {
  this.val = val;
  this.next = null;
}

var l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);


function countNodes(head) {
  // code here...
} 

// **************************************************
// possible solutions

// function countNodes(head) {
//   var count = 0;

//   while(head) {
//     count += 1;
//     head = head.next
//   }

//   return count;
// }

// console.log(countNodes(l1));
