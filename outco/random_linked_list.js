class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let n1 = new ListNode(5);
n1.next = new ListNode(3);
n1.next.next = new ListNode(22);
n1.next.next.next = new ListNode(4);
n1.next.next.next.next = new ListNode(71);

function prob(head) {
  let result;
  let count = 0;

  let current = head;

  while (current) {
    count++
    let chance = 1 / count;
    if (Math.random() < chance) result = current.val;
    current = current.next;
  }
  return result
}

console.log(prob(n1));

let tests = {};

tests[5] = 0;
tests[3] = 0;
tests[22] = 0;
tests[4] = 0;
tests[71] = 0;

let i = 10000000;

while (i--) {
  tests[prob(n1)]++;
}

console.log(tests);
