function LinkedListNode(val) {
  this.val = val;
  this.next = null;
}

var head = new LinkedListNode(1);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(3);
head.next.next.next = new LinkedListNode(4);
head.next.next.next.next = new LinkedListNode(5);

function printListBackwards(head) {
  if (!head) return;
  printListBackwards(head.next);
  console.log(head);
}

printListBackwards(head);

