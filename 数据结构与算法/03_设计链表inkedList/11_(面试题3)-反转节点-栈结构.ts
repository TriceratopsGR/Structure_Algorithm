import ListNode from "./ListNode";

function reverseList(head: ListNode | null): ListNode | null {
  // 1. head 本身为null 2. 只有一个 head 一个节点
  if (head === null || head.next === null) return head;

  // 3. 反转 链表
  const stack: ListNode[] = [];
  let current: ListNode | null = head;
  while (current) {
    stack.push(current);
    current = current.next;
  }
  console.log(stack);

  // 依次从栈结构中取出元素 放到一个新的链表中
  const newHead: ListNode = stack.pop()!;
  let newHeadCurrent = newHead;
  while (stack.length) {
    const node = stack.pop()!;
    newHeadCurrent.next = node;
    newHeadCurrent = newHeadCurrent.next;
  }
  // 获取到最后一个节点时，一定要将节点得next 置为null
  // 要将反转的最后一个元素 指向null 不然他又会指向第二个 变成无线循环了
  // 变成了一个相互指向
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
