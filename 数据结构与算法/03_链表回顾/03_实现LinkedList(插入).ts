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
  // 封装私有方法
  // 根据position 获取到当前的节点
  private getNode(position: number): Node<T> | null {
    let index = 0;
    let current = this.head;
    while (index++ < position && current) {
      current = current.next;
    }
    return current;
  }
  // 添加
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
  // 遍历链表的方法
  traverse() {
    const values: T[] = [];
    let current = this.head;
    while (current) {
      values.push(current.value);

      current = current.next;
    }
    console.log(values.join("->"));
  }
  // 插入方法
  insert(value: T, position: number): boolean {
    // 1. 越界判断
    // if (position < 0 || position >= this.size) {
    //   throw new Error(`传入的${position}越界了，请检查！`)
    // }
    if (position < 0 || position > this.size) return false;

    // 2. 根据Value 创建新的节点
    const newNode = new Node(value);

    // 3. 判断是否要插入到头部
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const previous = this.getNode(position - 1);
      newNode.next = previous!.next;
      previous!.next = newNode;
    }

    this.size++;
    return true;
  }
  // 删除方法
  removeAt(position: number | 0 = 0): T | null {
    // 1. 判断是否越界
    if (position < 0 || position >= this.size) return null;
    // 2. 删除的是0号元素
    let current = this.head;
    if (position === 0) {
      this.head = current?.next || null;
    } else {
      // 重构
      const previous = this.getNode(position - 1);
      // current 需要删除的节点  previous 前一个节点
      current = previous?.next || null;
      previous!.next = previous?.next?.next ?? null;
    }

    this.size--;
    return current?.value || null;
  }

  // get 方法拿到对应元素的值
  get(position: number): T | null {
    // 1. 判断是否越界
    if (position < 0 || position >= this.size) return null;
    // 2. 查找当前 节点
    return this.getNode(position)?.value ?? null;
  }
  // update 更新
  update(value: T, position: number): boolean {
    if (position < 0 || position >= this.size) return false;
    const currentNode = this.getNode(position);
    currentNode!.value = value;
    return true;
  }
  // 根据值，获取位置的索引
  indexOf(value: T) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  // 删除方法 根据value
  remove(value: T): T | null {
    const index = this.indexOf(value);
    return this.removeAt(index);
  }
  // 判断列表是否为空
  isEmpty(): boolean {
    return this.size === 0;
  }
}

const linkedList = new LinkedList<string>();
linkedList.append("aaaa");
linkedList.append("bbbb");
linkedList.append("cccc");
linkedList.append("dddd");
console.log("-----------插入-----------");

linkedList.insert("abcd", 0);
linkedList.insert("NCAA", 3);
linkedList.traverse();
linkedList.insert("NBA", 6);
linkedList.traverse();
console.log("-----------删除-----------");
console.log("被删除的元素", linkedList.removeAt(3));
linkedList.traverse();
console.log("被删除的元素", linkedList.removeAt());
linkedList.traverse();
console.log("-----------get-----------");
console.log(linkedList.get(4));

console.log("-----------更新-----------");
linkedList.update("更新", 3);
linkedList.traverse();
console.log("-----------indexOf-----------");
console.log(linkedList.indexOf("更新"));
console.log(linkedList.indexOf("aa"));
console.log("-----------remove-----------");
console.log(linkedList.remove("更新"));
console.log(linkedList.remove("NBA"));
console.log(linkedList.remove("aaaa"));
console.log(linkedList.remove("bbbb"));
console.log(linkedList.remove("cccc"));
linkedList.traverse();
console.log("-----------isEmpty-----------");
console.log("节点是否为空", linkedList.isEmpty());
export {};
