function ListNode(val) {
  this.val = val;
  this.next = null;
}

var deleteDuplicates = function(n) {
  if (!n) return;

  if (n.next && n.val === n.next.val) {
    n.next = n.next.next
  }

  deleteDuplicates(n.next);

  return n;
};


var l1 = new ListNode(1);
l1.next = new ListNode(1);
l1.next.next = new ListNode(2);
l1.next.next.next = new ListNode(3);
l1.next.next.next.next = new ListNode(3);

console.log(deleteDuplicates(l1));

// Input: 1->1->2
// Output: 1->2
// Example 2:

// Input: 1->1->2->3->3
// Output: 1->2->3
