// Does a linked list have a cycle?
// Given the head of a linked list determine if contains a cycle and return a boolean value
// a cycle is when one of the nodes points back to one of the previous nodes in the list meaning there is no end node

function LinkedListNode(val) {
  this.val = val;
  this.next = null;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');
var d = new LinkedListNode('D');

// no cycle
// a.next = b;
// b.next = c;
// c.next = d;

// has cycle
a.next = a;
b.next = c;
c.next = d;
d.next = b;


function hasCycle(head) {
  if (!head) return false; 
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }
  return false;
}

console.log(hasCycle(a));

