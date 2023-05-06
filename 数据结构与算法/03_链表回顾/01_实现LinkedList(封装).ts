class Node<T> {
  next: Node<T> | null = null;
  // constructor方法是类的默认方法，通过new命令生成对象实例，自动调用该方法。
  // 构造函数
  constructor(public value: T) {}
}

// 2.创建 LinkedList 类
class LinkedList<T> {
  head: Node<T> | null = null;
  // private 私有
  private size: number = 0;

  get length() {
    return this.size;
  }
}

const linkedList = new LinkedList<string>();
console.log(linkedList.head);

export {};
