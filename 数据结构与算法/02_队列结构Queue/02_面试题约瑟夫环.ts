import ArrayQueue from "./01_实现队列结构Queue";
function lastRemaining(n: number, m: number) {
  const queue = new ArrayQueue<number>();

  // 2.将所有地数字加入到队列中
  for (let i = 0; i < n; i++) {
    queue.enqueue(i);
  }

  // 3.判断队列中是否还有数字
  while (queue.size() > 1) {
    for (let i = 1; i < m; i++) {
      queue.enqueue(queue.dequeue()!);
    }
    queue.dequeue();
  }

  return queue.dequeue()!;

  //动态规划
  let position = 0;
  for (let i = 2; i <= n; i++) {
    position = (position + m) % i;
  }
  return position;
}

console.log(lastRemaining(5, 3));

console.log(lastRemaining(10, 4));
