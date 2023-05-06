import ListNode from "./ListNode";
function deleteNode(node: ListNode | null): void {
  node!.val = node?.next?.val || 0;
  node!.next = node?.next?.next || null;
}
export {};
