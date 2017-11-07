var Repo = (function() {
  var Node = function(value) {
    this.value = value;
    this.next = null;
  };

  var Stack = function() {
    this.first = null;
    this.last = null;
    this.size = 0;
  };

  Stack.prototype.push = function(value) {
    var newNode = new Node(value);
    if (!this.first) {
      this.last = newNode;
      this.first = newNode;
    } else {
      var tmp = this.first;
      this.first = newNode;
      this.first.next = tmp;
    }
    this.size++;
    return this.size;
  }

  Stack.prototype.pop = function() {
    if (!this.first) return null;

    var tmp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next

    this.size--;
    console.log(this);
    return tmp.value;
  }

  Stack.prototype.peek = function() {
    return this.first.value;
  }

  return {
    Node : Node,
    Stack : Stack
  }
}());

module.exports = Repo;
