function Node(val){
    this.val = val;
    this.next = null;
}

function SinglyLinkedList(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}

SinglyLinkedList.prototype.push = function(node) {
  if (!this.head) this.head = 1;
  if (this.tail) this.tail++;
  else this.tail = 1;

  this.length ++;
  return this;
}

let list1 = new SinglyLinkedList();
let node1 = new Node(5);
let node2 = new Node(6);

list1.push(node1);
list1.push(node2);

console.log(list1);

