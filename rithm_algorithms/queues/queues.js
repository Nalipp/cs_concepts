
var Repo = (function() {
  Node = function(value) {
    this.value = value;
    this.next = null;
  }

  Queue = function() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  Queue.prototype.enqueue = function(value) {
    var newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this.size;
  }

  Queue.prototype.dequeue = function() {
    let tmp = this.first;
    this.first = this.first.next;
    this.size--;
    return tmp.value;
  }

  Queue.prototype.peek = function() {
    if (this.first) return this.first.value;
  }

  return {
    Node : Node,
    Queue : Queue,
  }
}());

module.exports = Repo;
