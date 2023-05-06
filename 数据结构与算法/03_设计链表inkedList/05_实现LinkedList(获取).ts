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
    this.size++;
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

  // 插入方法
  // 要判断边界值
  insert(value: T, position: number): boolean {
    // 1. 判断越界值
    // if (position < 0 || position > this.size) {
    //   throw new Error(`传入的${position}越界了，请检查`);
    // }
    if (position < 0 || position > this.size) return false;

    // 2. 创建新的节点
    const newNode = new Node(value);

    // 3. 判断是否需要插入到头部
    if (position === 0) {
      // 没有指向的数据 会被回收调
      // 先将自己指向 head 再将 head 指向自己
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous: Node<T> | null = null;
      let index = 0;
      while (index++ < position && current) {
        previous = current;
        current = current.next;
      }
      // index === position
      // 拼接后面的节点
      newNode.next = current;
      // !断言 一定有值
      previous!.next = newNode;
    }
    this.size++;

    return true;
  }

  // 删除方法：
  removeAt(position: number): T | null {
    // 1. 越界判断
    if (position < 0 || position >= this.size) return null;
    // 2. 删除操作
    // 判断是否要删除第一个节点
    let current = this.head;
    if (position === 0) {
      this.head = current?.next ?? null;
    } else {
      let previous: Node<T> | null = null;
      let index = 0;
      while (index++ < position && current) {
        previous = current;
        current = current.next;
      }
      // 找到需要的节点了
      previous!.next = current?.next ?? null;
    }
    this.size--;
    return current?.value ?? null;
  }

  // get 方法拿到对应元素的值
  get(position: number): T | null {
    // 判断跨域
    if (position < 0 || position >= this.size) return null;

    let current = this.head;
    //1. 获取数据
    let index = 0;
    while (index++ < position && current) {
      current = current.next;
    }

    return current?.value || null;
  }
}

const linkedList = new LinkedList<String>();
// console.log(linkedList.head); //加了 私有化属性就不能访问了
// 创建 append
console.log("-------------append---------------");
linkedList.append("aaa");
linkedList.append("bbb");
linkedList.append("ccc");
linkedList.append("ddd");

// 插入 insert
console.log("-------------insert---------------");
linkedList.insert("abcd", 0);
linkedList.traverse(); // 遍历
linkedList.insert("ggg", 2);
linkedList.insert("插入", 6);

// 遍历 traverse
console.log("-------------traverse---------------");
linkedList.traverse(); // 遍历

// 删除 removeAt
console.log("-------------removeAt---------------");
linkedList.removeAt(0);
linkedList.traverse(); // 遍历 aaa->ggg->bbb->ccc->ddd->插入
linkedList.removeAt(0);
linkedList.traverse(); // 遍历 ggg->bbb->ccc->ddd->插入
console.log("被删除的元素", linkedList.removeAt(2));
linkedList.traverse(); // 遍历 ggg->bbb->ddd->插入
console.log("被删除的元素", linkedList.removeAt(3));
linkedList.traverse(); // 遍历 ggg->bbb->ddd

console.log("-------------get---------------");

// get
console.log(linkedList.get(1)); // bbb
console.log(linkedList.get(2)); // bbb
// ts-node 04...

export {};
