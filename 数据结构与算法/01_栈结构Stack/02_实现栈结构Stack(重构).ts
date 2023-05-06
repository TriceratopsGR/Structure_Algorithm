// 封装一个栈
// 泛型 <T>

import IStack from "./IStack";

// 不传就是 any
// 如果ArrayStack 漏掉的了 IStack 中的 方法就会报错
class ArrayStack<T = any> implements IStack<T> {
  // 定义一个数组/链表，用于存储元素
  //  private 私有的
  private data: T[] = [];

  //  push(element): 添加一个新元素到栈顶位置
  push(element: T): void {
    this.data.push(element);
  }
  //pop(): 移除栈顶的元素，同时返回被移除的元素。
  pop(): T | undefined {
    return this.data.pop();
  }
  // peek(): 返回栈顶元素，不对栈做任何修改
  peek(): T | undefined {
    return this.data[this.data.length - 1];
  }
  // isEmpty(): 如果栈里没有任何元素就返回true,否则返回false
  isEmpty(): boolean {
    return this.data.length === 0;
  }
  // size(): 返回栈里的元素个数。和数组的 length属性很类似
  size(): number {
    return this.data.length;
  }
}

class LinkedStack {}

// 创建Stack 的实例
// 借助工具 ts-node 运行我们的.ts文件 npm install -g ts-node
// 运行 ts-node 加文件名
// 上面的 T 在这里创建实例的时候 就会传人类型
// const stack1 = new ArrayStack<String>();
// stack1.push("aaa");
// stack1.push("bbb");
// stack1.push("ccc");
// stack1.push("ddd");
// const res = stack1.pop();
// console.log(res?.split(" "));

// console.log(stack1.peek());
// console.log(stack1.pop());
// console.log(stack1.pop());
// console.log(stack1.pop());
// console.log(stack1.pop());
// console.log(stack1.isEmpty());
// console.log(stack1.size());

// const stack2 = new ArrayStack<Number>();
// stack2.push(6);
// stack2.push(5);
// stack2.push(4);
// stack2.push(3);
// stack2.push(2);
// stack2.push(1);

export default ArrayStack;
