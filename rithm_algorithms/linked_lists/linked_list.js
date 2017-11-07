var repo = (() => {
    var Node = function(val){
        this.val = val;
        this.next = null;
    };

    var SinglyLinkedList = function() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    SinglyLinkedList.prototype.push = function(value) {
      var newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length ++;
      return this;
    }

    SinglyLinkedList.prototype.pop = function() {
      return this.remove(this.length - 1);
    }

    SinglyLinkedList.prototype.unshift = function(value) {
      let newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        oldHead = this.head;
        this.head = newNode;
        this.head.next = oldHead;
      }
      this.length++;
      return this;
    }
    
    SinglyLinkedList.prototype.shift = function() {
      if (this.head) return this.remove(0);
    }

    SinglyLinkedList.prototype.set = function(index, value) {
      if (this.__get(index)) {
        this.__get(index).val = value;
        return true;
      }
      else return false;
    }

    SinglyLinkedList.prototype.reverse = function() {
      for (let i = 0, j = this.length - 1; i < this.length / 2; i++, j--) {
        let temp = this.__get(j).val;
        this.set(j, this.__get(i).val);
        this.set(i, temp);
      }
    }

    SinglyLinkedList.prototype.get = function(index) {
      return this.__get(index) ? this.__get(index).val : null;
    }

    SinglyLinkedList.prototype.insert = function(index, value) {
      let newNode = new Node(value);
      let previusNode = this.__get(index - 1);
      let nextNode = this.__get(index);

      previusNode.next = newNode; 
      newNode.next = nextNode;

      this.length++;
      return this;
    }

    SinglyLinkedList.prototype.remove = function(index) {
      if (index < 0 || index >= this.length) return undefined;
      let tmp;
      if (index === 0) {
        tmp = this.head;
        this.head = this.head.next;
        this.length--;
        return tmp.val;
      }
      let previous = this.__get(index - 1);
      tmp = previous.next;
      previous.next = previous.next.next;
      this.length--;
      return tmp.val;
    }
    
    SinglyLinkedList.prototype.__get = function(index) {
      if (index < 0 || index >= this.length) return undefined;
      cur = this.head;
      var count = 0;
      while (cur !== null && count != index) {
        cur = cur.next;
        count++
      }
      return cur;
    }

    return {
    Node: Node,
    SinglyLinkedList: SinglyLinkedList
  }
})();

module.exports = repo;


