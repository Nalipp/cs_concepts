class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let h1 = new Node(2);
let h2 = new Node(1);

h1.next = new Node(3);
h1.next.next = new Node(5);

h2.next = new Node(4);
h2.next.next = new Node(6);

function mergeTwo(h1, h2) {
  if (!h1 || !h2) return h2 || h1;
  let main;
  let sub;
  let temp;

  if (h1 >= h2) {
    main = h2;
    sub = h1;
  } else {
    main = h1;
    sub = h2;
  }

  while (main && main.next) {
    if (sub <= main.next) {
      temp = main.next;
      main.next = sub;
      sub = temp;
      main = main.next;
    }
    else main = main.next;
  }
  return h1 >= h2 ? h2 : h1;
}

console.log(JSON.stringify(mergeTwo(h1, h2)));
