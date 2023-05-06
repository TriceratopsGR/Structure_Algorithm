// 1. 创建Node 节点类
class Node<T> {
  value: T;
  next: Node<T> | null = null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

// 2. 创建LinkedList类
class LinkedList<T> {
  // head 要指向下一个node 节点
  private head: Node<T> | null = null;
  // 记录几个节点了
  private size: number = 0;

  get length() {
    return this.size;
  }
  // 添加节点
  append(value: T) {
    // 1. 根据value 创建一个新节点
    const newNode = new Node(value);

    // 2. 判断是否为第一个 else 给下一节点添加元素
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      // current 肯定是指向最后一个节点的
      current.next = newNode;
    }
  }

  // 遍历列表
  traverse() {
    const values: T[] = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join("->"));
  }
}

const linkedList = new LinkedList<String>();
// console.log(linkedList.head); //加了 私有化属性就不能访问了
linkedList.append("aaa");
linkedList.append("bbb");
linkedList.append("ccc");
linkedList.append("ddd");

linkedList.traverse(); // 遍历

export {};
