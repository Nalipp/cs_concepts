function List() {
  this.head = null;
  this.next = null;
}

function Node(val) {
  this.val = val;
}

List.prototype.insertLast = function(val) {
  let newNode = new Node(val);
  if (!this.head) this.head = newNode;
  else {
    let current = this.head;
    while (current.next) {    
      current = current.next;
    }
    current.next = newNode;
  }
  return this;
}

let list = new List();

list.insertLast('a');
list.insertLast('b');
list.insertLast('c');
list.insertLast('d');

function fromLast(list, n) {
  if (!list.head) return null;
  let slow = list.head;
  let fast = list.head;
  while (n--) fast = fast.next;
  if (!fast.next) return slow.val;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow.next.val;
}

console.log(fromLast(list, 1))


