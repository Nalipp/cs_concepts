// *****************************************************
// Remove duplicates
// https://repl.it/@nateplipp/LinkedListRemoveDuplicates

// Input: 1->1->2->3->3
// Output: 1->2->3


function ListNode(val) {
  this.val = val;
  this.next = null;
}

var l1 = new ListNode(1);
l1.next = new ListNode(1);
l1.next.next = new ListNode(2);
l1.next.next.next = new ListNode(3);
l1.next.next.next.next = new ListNode(3);


var removeDuplicates = function(head) {
  // code here...
};

console.log(removeDuplicates(l1));


// *************************************************************
// possible solutions

// var removeDuplicates = function(head) {
//   let node = head;
//   while(node) {
//     if(node.next && node.val === node.next.val) {
//         node.next = node.next.next;
//     }
//     else node = node.next;
//   }
//   return head;
// };
