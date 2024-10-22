// 1. 创建Node 节点类
export class Node<T> {
  value: T;
  next: Node<T> | null = null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
// 双向链表 继承 Node
export class DoublyNode<T> extends Node<T> {
  prev: DoublyNode<T> | null = null;
  next: DoublyNode<T> | null = null; // 重写next 不然 dNode.next.prev 会报错
}

const dNode = new DoublyNode("aaa");
// dNode.prev?.prev
// dNode.next?.prev
// (dNode.next as DoublyNode<string>).prev
