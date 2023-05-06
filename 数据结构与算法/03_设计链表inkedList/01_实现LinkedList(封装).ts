// 1. 创建Node 节点类
class Node<T> {
  value: T;
  next: Node<T> | null = null;
  // 创建的时候赋值
  constructor(value: T) {
    this.value = value;
  }
}

// 2. 创建LinkedList类
class LinkedList<T> {
  head: Node<T> | null = null;
  // 记录几个节点了
  private size: number = 0;

  get length() {
    return this.size;
  }
}

const linkedList = new LinkedList<String>();
console.log(linkedList.head);

export {};
