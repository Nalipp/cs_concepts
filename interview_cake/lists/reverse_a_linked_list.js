function LinkedListNode(val) {
  this.val = val;
  this.next = null;
}

var head = new LinkedListNode(1);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(3);
head.next.next.next = new LinkedListNode(4);
head.next.next.next.next = new LinkedListNode(5);

function reverse(head) {
  if (!head || !head.next) return head;  
  let temp;
  let newList = null;

  while (head) {
    temp = head.next;
    head.next = newList;
    newList = head;
    head = temp;
  }

  return newList;
}

console.log(JSON.stringify(reverse(head)));
