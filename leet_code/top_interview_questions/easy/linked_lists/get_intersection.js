function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

var getIntersection = function(headA, headB) {
  let p1 = headA;
  let p2 = headB;
  while (p1.val !== p2.val) {
    p1 = p1 ? p1.next : headB;
    p2 = p2 ? p2.next : headA;
  }
  return p1.val;
}


n1 = new ListNode(1, new ListNode(3, new ListNode(4, new ListNode(5))));
n2 = new ListNode(2, new ListNode(3, new ListNode(4)));

console.log(getIntersection(n1, n2)); 
