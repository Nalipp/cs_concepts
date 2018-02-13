function ListNode(val) {
  this.val = val;
  this.next = null;
}

let l1 = new ListNode(1)
let n2 = new ListNode(2)
l1.next = n2;
let n3 = new ListNode(4)
n2.next = n3;

let l2 = new ListNode(1)
let n5 = new ListNode(3)
l2.next = n5;
let n6 = new ListNode(4)
n5.next = n6;

var mergeTwoLists = function(l1, l2) {
  if (!l1 && !l2) return null; 
  let temp1;
  let temp2;
  let current1 = l1;
  let current2 = l2;
  while(current2) {
    temp1 = current1.next;
    temp2 = current2.next;
    current1.next = current2;
    current2.next = temp1;
    current2 = temp2;
    if (!current1.next || !current2.next) {
      current1.next = current2;
      return current1;
    }
  }
};

console.log(mergeTwoLists(l1, l2));
