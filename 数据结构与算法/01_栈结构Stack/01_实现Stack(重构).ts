// 封装一个栈
class ArrayStack {
  // 定义一个数组/链表，用于存储元素
  //  private 私有的
  private data: any[] = [];

  // 实现栈中相关的操作方法
  /**
    - push(element): 添加一个新元素到栈顶位置
    - pop(): 移除栈顶的元素，同时返回被移除的元素。
    - peek(): 返回栈顶元素，不对栈做任何修改
    - isEmpty(): 如果栈里没有任何元素就返回true,否则返回false
    - size(): 返回栈里的元素个数。和数组的 length属性很类似
    */
  // any 表示什么元素都可以
  // : void  表示这个方法没有返回值
  //  push(element): 添加一个新元素到栈顶位置
  push(element: any): void {
    this.data.push(element);
  }
  //pop(): 移除栈顶的元素，同时返回被移除的元素。
  pop(): any | undefined {
    return this.data.pop();
  }
  // peek(): 返回栈顶元素，不对栈做任何修改
  peek(): any {
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
const stack1 = new ArrayStack();
stack1.push("aaa");
stack1.push("bbb");
stack1.push("ccc");
stack1.push("ddd");
console.log(stack1.peek());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.isEmpty());
console.log(stack1.size());

export {};
