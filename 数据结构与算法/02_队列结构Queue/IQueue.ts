import IList from "../IList/IList";
// extends 继承 和栈公共的 方法
interface IQueue<T> extends IList<T> {
  // 入队方法
  enqueue(element: T): void;
  // 出队方法
  dequeue(): T | undefined;

  // peek(): T | undefined;
  // isEmpty(): boolean;
  // size(): number;

  get sizes(): number;
}
export default IQueue;
