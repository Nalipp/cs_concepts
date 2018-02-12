class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class List {
  constructor() {
    this.head = null;
  }
}

let l1 = new List();
l1.head = new Node(1, new Node(2, new Node(3, new Node(4))))

var reverse = function(head) {
  let h1 = null;
  let h2 = head;
  let temp = null;

  while(h2) {
    temp = h2.next;
    h2.next = h1;
    h1 = h2;
    h2 = temp;
  }
  return head = h1;
}

console.log(reverse(l1.head))

