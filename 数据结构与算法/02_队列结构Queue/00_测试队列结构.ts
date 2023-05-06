import ArrayQueue from "./01_实现队列结构Queue";

const queue = new ArrayQueue<String>();

queue.enqueue("abc");
queue.enqueue("cba");
queue.enqueue("nba");
queue.enqueue("ncaa");

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.sizes); // get sizes 语法 可以不用当中方法用了
