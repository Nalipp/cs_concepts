function ListNode(val) {
     this.val = val;
     this.next = null;
 }
var removeNthFromEnd = function(head, n) {
  if (!head || n === 0) return head;
  let slow = head;
  let fast = head;
  while(n--) {
    if(!fast.next) {
      if(fast === head) return null;
      else return head;
    }
    fast = fast.next;
  }
  while(fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  if (!slow.next.next) slow.next = null;
  else slow.next = slow.next.next;
  return head.next;
};

let n1 = new ListNode(1);
let n2 = new ListNode(2);
n1.next = n2;
let n3 = new ListNode(3);
n2.next = n3;
let n4 = new ListNode(4);
n3.next = n4;
let n5 = new ListNode(5);
n4.next = n5;

console.log(removeNthFromEnd(n1, 2));
