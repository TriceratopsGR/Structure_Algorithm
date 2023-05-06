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

  append(value: T) {
    // 1. 先创建新节点
    const newNode = new Node(value);
    // 2. 判断this.head 是否为空或
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      // 此时 current 是指向最后一个节点的；
      current.next = newNode;
    }
    // 3. size++
    this.size++;
  }
}

const linkedList = new LinkedList<string>();
linkedList.append("aaaa");
linkedList.append("bbbb");
linkedList.append("cccc");
linkedList.append("dddd");
export {};
