import ListNode from "./ListNode";

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;
  let current: ListNode | null = head;
  let stack: ListNode[] = [];
  while (current) {
    stack.push(current);
    current = current.next;
  }

  // 依次从栈结构中取出元素 放到一个新的链表中
  const newHead: ListNode = stack.pop()!;
  let newHeadCurrent = newHead;
  while (stack.length) {
    const node = stack.pop()!;
    newHeadCurrent.next = node;
    newHeadCurrent = newHeadCurrent.next;
  }
  console.log(newHeadCurrent);

  newHeadCurrent.next = null;
  return newHead;
}

// 模拟数据
const node1 = new ListNode(1);
node1.next = new ListNode(2);
node1.next.next = new ListNode(3);
node1.next.next.next = new ListNode(4);

const newHead = reverseList(node1);
let currents = newHead;
while (currents) {
  console.log(currents.val);
  currents = currents.next;
}

export {};
