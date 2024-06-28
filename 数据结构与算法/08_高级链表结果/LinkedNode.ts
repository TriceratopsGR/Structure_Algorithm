// 1. 创建Node 节点类
export class Node<T> {
  value: T;
  next: Node<T> | null = null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class DoublyNode<T> extends Node<T> {
  prev: DoublyNode<T> | null = null;
}

const dNode = new DoublyNode("aaa");
// dNode.prev?.prev
// (dNode.next as DoublyNode<string>).prev
