Where you able to get the first day study booked?

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

let list = new LinkedList();
list.head = nodes;


LinkedList.prototype.isPalindrome = function() {
  if (!this.head || !this.head.next) return true;
  let mid = this.findMiddle();
  let h1 = this.head;
  let h2 = this.reverse(mid);
  while(h2) {
    if(h1.val !== h2.val) return false;
    h1 = h1.next;
    h2 = h2.next;
  }
  return true;
};

LinkedList.prototype.findMiddle = function() {
  let fast = this.head;
  let slow = this.head.next;
  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

LinkedList.prototype.reverse = function(head) {
  let h1 = head;
  let h2;
  let temp;

  while(h1) {
    temp = h1.next;
    h1.next = h2;
    h2 = h1;
    h1 = temp;
  }
  return head = h2;
};

console.log(list.isPalindrome());

