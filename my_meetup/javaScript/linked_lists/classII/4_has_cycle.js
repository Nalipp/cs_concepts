function ListNode(val) {
  this.val = val;
  this.next = null;
}

var l1 = new ListNode(1); 
var l2 = new ListNode(2); 
var l3 = new ListNode(3); 
var l4 = new ListNode(4); 
var l5 = new ListNode(5); 

l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = l3; // circular loop

function hasCycle(node) {
  // code here
}

console.log(hasCycle(l1));

// ************************************************************
// possible solutions

  // function hasCycle(node) {
  //   var slow = node;
  //   var fast = node;

  //   while(slow.next && fast.next) {
  //     slow = slow.next;
  //     fast = fast.next.next;

  //     if (slow.val === fast.val) {
  //       return true;
  //     }
  //   }

  //   return false;
  // }
