class HashTable<T = any> {
  // 创建数组 -》 存放连地址法中的链(数组)
  // key value
  private storage: [string, T][] = [];
  // 定义数组的长度
  private length: number = 7;
  // 记录已经存放元素的个数
  private count: number = 0;
}

const hashTable = new HashTable();
// hashTable.put("aaa", 100);

export default HashTable;
