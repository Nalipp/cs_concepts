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

list.insertLast(1);
list.insertLast(2);
list.insertLast(3);

console.log(JSON.stringify(list));

