// *****************************************************
// findMid
// https://repl.it/@nateplipp/LinkedListFindMid

//   Find the middle node in a linked list.

//   Input :
//   1 -> 2 -> 3 -> 4
//   Output : 2
//
//   Input :
//   1 -> 2 -> 3 -> 4 -> 5
//   Output : 3

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);
l1.next.next.next.next = new ListNode(5);

function findMid(head) {
  // code here..
}

console.log(findMid(l1)); 

// **************************************************
// possible solutions

// function findMid(head) {
//   let fast = head;
//   let slow = head;

//   while(fast.next && fast.next.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   return slow;
// }
