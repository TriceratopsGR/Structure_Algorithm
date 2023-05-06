import ArrayQueue from "./01_实现队列结构Queue";

function hotPotato(names: String[], num: number) {
  if (names.length === 0) return -1;
  // 1.创建一个队列
  const queue = new ArrayQueue<String>();

  //2.将所有的name 加入队列中
  for (const name of names) {
    queue.enqueue(name);
  }
  // 3.循环： 队列中的人不断地数数
  while (queue.size() > 1) {
    // for 循环是开始数数
    for (let i = 1; i < num; i++) {
      const namew = queue.dequeue();
      if (namew) queue.enqueue(namew);
    }
    queue.dequeue();
  }
  const leftName = queue.dequeue()!;
  console.log("最后剩余地人是", leftName);

  return names.indexOf(leftName);
}

const names1 = ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "king"];

console.log(hotPotato(names1, 5));
