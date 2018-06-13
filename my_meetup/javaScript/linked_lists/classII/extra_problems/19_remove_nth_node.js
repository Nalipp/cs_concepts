// *****************************************************
// remove nth node

//   remove the nth node from a linked list.
// https://repl.it/@nateplipp/LinkedListremoveNth

//   Input : list => 1 -> 2 -> 3 -> 4, n => 2
//   Output : 1 -> 2 -> 4
//

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);

function removeNthFromEnd(head, n) {
  // code here...
}

console.log(removeNthFromEnd(l1, 2)); 
