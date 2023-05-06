import ListNode from "./ListNode";

function reverseList(head: ListNode | null): ListNode | null {
  // 1. head 本身为null  // 2. 只有一个 head 一个节点
  if (head === null || head.next === null) return head;

  //3. 非递归处理 反转链表结构
  let newHead: ListNode | null = null;
  while (head) {
    // 1. 让current 节点指向下一个节点
    // 目的: 保留着下一个节点的引用，可以拿到，并且不会销毁
    const current: ListNode | null = head.next;
    // 2.改变head 当前指向的节点，指向newHead
    // 对于第一个节点来说，指向newHead就是指向null
    head.next = newHead;
    // 3. 让newHead 指向 head节点
    // 目的是下一次遍历时，第二步操作，可以让下一次节点指向第一个节点
    newHead = head;
    // 4.让head移向下一个节点，指向current
    head = current;
  }

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
