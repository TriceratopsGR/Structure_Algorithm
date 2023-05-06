// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }
import ListNode from "./ListNode";
// 意识是 给了 4519  给了5 但是要删除5 但是你又不知道4
// 所以  我们将 5赋值为1
// 然后将 原来的5节点指向 9
function deleteNode(node: ListNode | null): void {
  node!.val = node!.next!.val;
  node!.next = node!.next!.next;
}

export {};
