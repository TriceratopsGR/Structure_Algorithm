/**
 * 哈希函数  传入字符串key 映射出 索引index
 * @param key  要转换的key
 * @param max 数组的长度
 * @returns 索引
 */
function hashFunc(key: string, max: number): number {
  // 1. 计算 hashCode cats => 60337 (27为底的时候)
  let hashCode = 0;
  const length = key.length;
  for (let i = 0; i < length; i++) {
    // 霍纳法则  计算hashCode
    // charCodeAt 输出72，因为'H'的Unicode编码是72
    hashCode = 31 * hashCode + key.charCodeAt(i);
  }

  // 2. 求出索引值
  const index = hashCode % max;
  return index;
}

export default hashFunc;
// 测试
// loadFactor = 4 / 7 -> 填充因子
console.log(hashFunc("abc", 7));
console.log(hashFunc("cba", 7));
console.log(hashFunc("nba", 7));
console.log(hashFunc("mba", 7));
// 填充因子 大于0.75 就要扩容 max++
console.log(hashFunc("aaa", 11));
console.log(hashFunc("bbb", 11));
console.log(hashFunc("ccc", 11));
console.log(hashFunc("ddd", 11));
