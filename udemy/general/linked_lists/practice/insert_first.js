function List() {
  this.head = null;
  this.next = null;
}

function Node(val) {
  this.val = val;
}

List.prototype.insertFirst = function(val) {
  let newNode = new Node(val);
  if (!this.head) this.head = newNode;
  else newNode.next = this.head;
  this.head = newNode;
  return this;
}

let list = new List();

list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);

console.log(list.head);
