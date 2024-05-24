/**
 * 判断是否为质数 大于一的自然数中，只能被1和自身整除的数
 * 根据传入的数字，判断是否是一个质数
 * @param num  要判断的数字
 * @returns 是否是一个质数
 */
function isPrime(num: number): boolean {
  // 大于一的自然数中，只能被1和自身整除的数
  // num = 8
  // 2 ~ 7
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  // 2 `~ 7 都被遍历后 没有返回的就是质数
  return true;
}

export default isPrime;
console.log(isPrime(8));
console.log(isPrime(14));
console.log(isPrime(15));

console.log(isPrime(17));
console.log(isPrime(23));
