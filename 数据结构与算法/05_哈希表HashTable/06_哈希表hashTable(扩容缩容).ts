// import hashFunc from "./01_哈希函数hashFunc";

class HashTable<T = any> {
  // 创建数组 -》 存放连地址法中的链(数组)
  // key value
  storage: [string, T][][] = []; // [[[key,value]]]
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

  // 扩容 缩容
  private resize(newLength: number) {
    // 1. 设置新的长度
    this.length = newLength;

    // 2. 获取原来所有的数据，存放到新的容量数组中
    // 2.1 对数据进行初始化
    const oldStorage = this.storage;
    this.storage = [];
    this.count = 0;
    // 2.2 获取原来数据，放入新的数组中
    oldStorage.forEach((bucket) => {
      if (!bucket) return;
      for (let i = 0; i < bucket.length; i++) {
        const tuple = bucket[i];
        this.put(tuple[0], tuple[1]);
      }
    });
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

      // 发现 loadFactor 比例已经大于0.75，那么进行扩容
      const loadFactor = this.count / this.length;
      if (loadFactor > 0.75) {
        // 这样重复率很高 需要进行判单寻找到最近的质数
        this.resize(this.length * 2);
      }
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

  // 删除 remove
  delete(key: string): T | undefined {
    // 1. 获取索引
    const index = this.getIndex(key, this.length);

    // 2. 获取桶
    let bucket = this.storage[index];
    if (!bucket) return undefined;

    // 3. 遍历桶 找数据
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      const tupleKey = tuple[0];
      if (tupleKey === key) {
        bucket.splice(i, 1);
        this.count--;
        // 如果loadFactor 小于 0.25
        const loadFactor = this.count / this.length;
        if (loadFactor < 0.25 && this.length > 7) {
          this.resize(Math.floor(this.length / 2));
        }
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

hashTable.put("hhh", 333);
hashTable.put("fff", 444);
hashTable.put("ccc", 300);

console.log(hashTable.storage);

hashTable.put("ddd", 400);
hashTable.put("eee", 500);
hashTable.put("fff", 600);
hashTable.put("ggg", 700);

console.log(hashTable.storage);

// length: 7
// count: 8
// loadFactor:8/ 7 = 1.1xxxx  装填因子 > 0.75 就想要扩容

export default HashTable;
