// import hashFunc from "./01_哈希函数hashFunc";

class HashTable<T = any> {
  // 创建数组 -》 存放连地址法中的链(数组)
  // key value
  private storage: [string, T][][] = []; // [[[key,value]]]
  // 定义数组的长度
  private length: number = 7;
  // 记录已经存放元素的个数
  private count: number = 0;

  // 哈希函数
  private getIndex(key: string, max: number) {
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

  // 插入 / 修改
  put(key: string, value: T) {
    // 1. 根据key 获取数组中索引值
    // hashFunc(key, this.length);
    const index = this.getIndex(key, this.length);

    // 2. 取出索引值对应位置的数组
    let bucket = this.storage[index];

    // 3. 判断bucket 是否有值
    if (!bucket) {
      bucket = [];
      // 重新指向新的地址
      this.storage[index] = bucket;
    }

    // 4. 确定是一个数组了，是否存在对应的key
    let isUpdate = false;
    for (let i = 0; bucket.length > i; i++) {
      const tuple = bucket[i]; // [key,value]
      const tupleKey = tuple[0];
      if (tupleKey === key) {
        // 存在就覆盖
        tuple[1] = value;
        isUpdate = true;
      }
    }

    // 5. 如果没有覆盖 就添加
    if (!isUpdate) {
      bucket.push([key, value]);
      this.count++;
    }
  }

  // 获取值
  get(key: string): T | undefined {
    // 1. 根据key 获取
    const index = this.getIndex(key, this.length);

    // 2. 取出索引值对应位置的数组 桶
    let bucket = this.storage[index];
    // console.log("bucket", bucket, this.storage, this.count);

    // 3. 没有值直接return
    if (!bucket) return undefined;

    // 4. 遍历桶
    for (let i = 0; bucket.length > 0; i++) {
      const tuple = bucket[i];
      const tupleKey = tuple[0];
      if (tupleKey === key) {
        return tuple[1];
      }
    }

    return undefined;
  }
}

const hashTable = new HashTable();
hashTable.put("aaa", 100);
hashTable.put("aaa", 200);
hashTable.put("bbb", 200);
hashTable.put("ccc", 300);

console.log(hashTable.get("aaa"));
console.log(hashTable.get("ccc"));

export default HashTable;
