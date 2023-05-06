import ArrayStack from "./02_实现栈结构Stack(重构)";

// 十进制转 二进制   拿十进制的数 /2
function decimalToBinary(decimal: number): string {
  // 1.创建一个栈 用于存放余数
  const stack = new ArrayStack<number>();

  // 2. 这个地方要重复多次 循环
  // while（不确定次数，只知道循环的条件）
  // for(知道次数用这个)
  while (decimal > 0) {
    const result = decimal % 2;
    stack.push(result);
    decimal = Math.floor(decimal / 2); // 去除小数点Math.floor
  }

  // 3. 将所有的余数 都已经存放在 stack,取出来就可以了
  let binary = "";
  while (!stack.isEmpty()) {
    // console.log(stack.pop());
    binary += stack.pop();
  }
  return binary;
}

console.log(decimalToBinary(35));

export {};
