import ListNode from "./ListNode";

function reverseList(head: ListNode | null): ListNode | null {
  // 如果 使用的是递归，那么递归必须有结束条件
  if (head === null || head.next === null) return head;
  const newHead = reverseList(head?.next ?? null);

  //完成想要完成的操作要在这里写 从最后一个开始反转
  /**
   * ListNode { val: 2, next: ListNode { val: 3, next: null } }
      ListNode {
        val: 1,
        next: ListNode { val: 2, next: ListNode { val: 3, next: null } }
      }
   */
  // 第一次来到这里的时候，是倒数第二个节点
  console.log("newHead", newHead);

  console.log(head);
  // 让后一个指向 前一个
  head.next.next = head;
  head.next = null;
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
