class Queue {
  constructor() {
    this.data = [];
  }
  enqueue(val) {
    this.data.unshift(val);
  }
  dequeue() {
    return this.data.pop();
  }
  printData() {
    console.log(this.data);
  }
}

let q = new Queue;

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);

q.printData();

q.dequeue();
q.dequeue();

q.printData();

