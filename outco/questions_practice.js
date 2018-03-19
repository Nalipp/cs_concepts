class ListNode {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

function generateList(arr) {
  if (arr.length === 0) { return null; }
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function printBackwards(n1) {
  if (!n1.next) {
    console.log(n1.value);
    return;
  }
  printBackwards(n1.next);
}

// function reverse(node) {
//   let newList = node;
//   newList.next = null;
//   let current = node.next;

//   while (current) {
//     let temp = current;
//     current.next = newList;
//     current = temp.next;
//   }
//   return newList;
// }

let n1 = generateList([1, 5, 7, 10]);

printBackwards(n1); 
// console.log(reverse(n1));
