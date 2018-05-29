function ListNode(val) {
  this.val = val;
  this.next = null;
}

var deleteDuplicates = function(head) {
};


var l1 = new ListNode(1);
l1.next = new ListNode(1);
l1.next.next = new ListNode(2);

console.log(deleteDuplicates(l1));

// Input: 1->1->2
// Output: 1->2
// Example 2:

// Input: 1->1->2->3->3
// Output: 1->2->3
