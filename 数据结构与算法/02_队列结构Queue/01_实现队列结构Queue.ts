import IQueue from "./IQueue";

class ArrayQueue<T> implements IQueue<T> {
  // 内部通过数组（链表）保存
  private data: T[] = [];

  enqueue(element: T): void {
    this.data.push(element);
  }
  dequeue(): T | undefined {
    //shift 移除数组中第一个元素
    return this.data.shift();
  }
  peek(): T | undefined {
    return this.data[0];
  }
  isEmpty(): boolean {
    return this.data.length === 0;
  }
  size(): number {
    return this.data.length;
  }
  get sizes(): number {
    return this.data.length;
  }
}
export default ArrayQueue;
