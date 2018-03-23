// Given the head of a linked list reverse the order of the list and return the reversed list

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
}

console.log(JSON.stringify(reverse(head)));
//  => {"val":5,"next":{"val":4,"next":{"val":3,"next":{"val":2,"next":{"val":1,"next":null}}}}}

  // if (!head || !head.next) return head;  
  // let temp;
  // let newList = null;

  // while (head) {
  //   temp = head.next;
  //   head.next = newList;
  //   newList = head;
  //   head = temp;
  // }

  // return newList;
