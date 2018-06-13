// **************************************************
// Reverse
// https://repl.it/@nateplipp/LinkedListReverse

//   Reverse a linked list and return

//   Input  : 1 -> 2 -> 3 -> 4 -> n
//   Output : 4 -> 3 -> 2 -> 1 -> n


function ListNode(val) {
  this.val = val;
  this.next = null;
}

var l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);

function reverse(head) {
}

console.log(reverse(l1)); 


// ************************************************** 
// possible solutions

// function reverse(head) {
//   let h1 = head;
//   let h2 = null;
//   let temp;
    
//   while(h1) {
//     temp = h1.next;
//     h1.next = h2;
//     h2 = h1;
//     h1 = temp;
//   }
    
//   return head = h2;
// }
