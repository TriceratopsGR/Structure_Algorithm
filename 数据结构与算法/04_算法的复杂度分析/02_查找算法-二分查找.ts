/**
 * 顺序查询的方法
 * @param array 查找的数组
 * @param num 查找的元素
 * @returns 查找到的索引，未找到返回-1
 */
function binarySearch(array: number[], num: number) {
  // 1. 先定义左边的索引
  let left = 0;
  // 2. 定义右边的索引
  let right = array.length - 1;

  // 3. 开始查找
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const midNum = array[mid];
    if (midNum === num) {
      return mid;
    } else if (midNum < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const index = binarySearch([1, 3, 5, 10, 100, 222, 333], 100);
console.log(index);
export default binarySearch;
