import ILinkedList from "./ILinkedList";
import { Node } from "./LinkedNode";

// 2. 创建LinkedList类
export default class LinkedList<T> implements ILinkedList<T> {
  // protected 外界还是不能访问我得，但是子类可以访问
  // head 要指向下一个node 节点
  protected head: Node<T> | null = null;
  // 记录几个节点了
  protected length: number = 0;
  // 总是执行链表的尾部
  protected tail: Node<T> | null = null;

  size() {
    return this.length;
  }
  //
  peek(): T | undefined {
    return this.head?.value;
  }
  // 私有方法
  private getNode(position: number): Node<T> | null {
    let index = 0;
    let current = this.head;
    while (index++ < position && current) {
      current = current.next;
    }
    // 返回的是当前需要的节点1
    return current;
  }

  // 判断是否为最后一个节点
  private isTail(node: Node<T>): boolean {
    return this.tail === node;
  }

  /**
   * 添加节点
   * @param value
   */
  append(value: T) {
    // 1. 根据value 创建一个新节点
    const newNode = new Node(value);

    // 2. 判断是否为第一个 else 给下一节点添加元素
    if (!this.head) {
      this.head = newNode;
    } else {
      // 直接将尾部节点指向新增的接口
      this.tail!.next = newNode;
    }

    // 更换尾部节点
    this.tail = newNode;
    this.length++;
  }

  /**
   * 遍历列表
   */
  traverse() {
    const values: T[] = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      // 已经遍历到最后一个节点了
      if (this.isTail(current)) {
        current = null;
      } else {
        current = current.next;
      }
    }

    // 循环链表需要这个代码
    // aaa->bbb->ccc->ddd->eee
    // 列表已经循环完毕，然后push 第一个节点
    // aaa->bbb->ccc->ddd->eee->aaa
    if (this.head && this.tail?.next === this.head) {
      values.push(this.head.value);
    }
    console.log(values.join("->"));
  }

  /**
   * 插入方法  -> 要判断边界值
   * @param value
   * @param position
   * @returns
   */
  insert(value: T, position: number): boolean {
    // 1. 判断越界值
    if (position < 0 || position > this.length) return false;

    // 2. 创建新的节点
    const newNode = new Node(value);

    // 3. 判断是否需要插入到头部
    if (position === 0) {
      // 没有指向的数据 会被回收调
      // 先将自己指向 head 再将 head 指向自己
      newNode.next = this.head;
      this.head = newNode;
    } else {
      // 拿前一个节点
      const previous = this.getNode(position - 1);
      // 拼接后面的节点
      newNode.next = previous?.next ?? null;
      // !断言 一定有值
      previous!.next = newNode;
      // 如果插入是尾部 就要替换尾部节点
      if (position === this.length) {
        this.tail = newNode;
      }
    }
    this.length++;

    return true;
  }

  /**
   * 删除方法
   * @param position
   * @returns
   */
  removeAt(position: number): T | null {
    // 1. 越界判断
    if (position < 0 || position >= this.length) return null;
    // 2. 删除操作
    // 判断是否要删除第一个节点
    let current = this.head;
    if (position === 0) {
      this.head = current?.next ?? null;
      // 删除只有一个节点的时候
      if (this.length === 1) {
        this.tail = null;
      }
    } else {
      // 拿上一个节点
      const previous = this.getNode(position - 1);
      // 需要给current 重新赋值
      current = previous?.next || null;
      // 找到需要的节点了
      // 跳过 需要删除的节点 秒啊
      previous!.next = previous?.next?.next ?? null;
      if (position === this.length - 1) {
        this.tail = previous;
      }
    }

    this.length--;
    return current?.value ?? null;
  }
  /**
   * 删除方法
   * @param value
   * @returns value
   */
  remove(value: T): T | null {
    const index = this.indexOf(value);
    return this.removeAt(index);
  }

  // get 方法拿到对应元素的值
  get(position: number): T | null {
    // 判断跨域
    if (position < 0 || position >= this.length) return null;

    // 2.查找元素，并且返回元素
    return this.getNode(position)?.value || null;
  }

  /**
   * 更新方法
   * @param value
   * @param position
   * @returns
   */
  update(value: T, position: number): boolean {
    if (position < 0 || position >= this.length) return false;
    // 获取对应的节点直接更新 即可
    const currentNode = this.getNode(position); // 获取
    currentNode!.value = value; // 更新
    return true;
  }

  /**
   * 根据值 获取对应的索引 indxOf
   * @param value
   * @returns
   */
  indexOf(value: T): number {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      // 判断是否为最后一个节点
      if (this.isTail(current)) {
        current = null;
      } else {
        current = current.next;
      }
      index++;
    }

    return -1;
  }

  /**
   * 判断链表是否为空
   * @returns boolean
   */
  isEmpty() {
    return this.length === 0;
  }
}

// const linkedList = new LinkedList<string>();
// console.log("------------ 测试append ------------");
// linkedList.append("aaa");
// linkedList.append("bbb");
// linkedList.append("ccc");
// linkedList.append("ddd");
// linkedList.traverse();

// console.log("------------ 测试insert ------------");
// linkedList.insert("abc", 0);
// linkedList.traverse();
// linkedList.insert("cba", 2);
// linkedList.insert("nba", 6);
// linkedList.traverse();

// // 测试删除节点
// console.log("------------ 测试removeAt ------------");
// linkedList.removeAt(0);
// linkedList.removeAt(0);
// linkedList.traverse();

// console.log(linkedList.removeAt(2));
// linkedList.traverse();
// console.log(linkedList.removeAt(3));
// linkedList.traverse();

// console.log("------------ 测试get ------------");
// console.log(linkedList.get(0));
// console.log(linkedList.get(1));
// console.log(linkedList.get(2));
// // ts-node 04...
// console.log("------------ 测试update ------------");
// linkedList.update("kkk", 1);
// linkedList.update("yyy", 2);
// console.log(linkedList.get(1));

// console.log("------------ 测试indexOf ------------");
// console.log(linkedList.indexOf("kkk"));
// console.log(linkedList.indexOf("yyy"));
// linkedList.traverse();

// console.log("------------ 测试indexOf ------------");
// console.log(linkedList.remove("yyy"));
// console.log(linkedList.remove("kkk"));
// console.log(linkedList.removeAt(0));
// linkedList.traverse();
// console.log(linkedList.isEmpty());
export {};
