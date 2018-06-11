function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

var mergeTwoLists = function(l1, l2) {
  if(!l1 && !l2) return null;
  if(!l1) return l2;
  if(!l2) return l1;
  let r = new ListNode(l1.val);
  let newHead = r;
  r = r.next;
  l1 = l1.next;
  while(l1 || l2) {
    if(l2) {
      r.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    if(l1) {
      r.next = new ListNode(l1.val);
      l1 = l1.next;
    }
  }
  return r;
}

let n1 = new ListNode(1, new ListNode(3, new ListNode(4, new ListNode(5))));
let n2 = new ListNode(2, new ListNode(3, new ListNode(4)));

console.log(mergeTwoLists(n1, n2));
