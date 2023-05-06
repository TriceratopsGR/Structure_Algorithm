import { testOrderSearchEfficiency } from "hy-algokit";
import sequentSearch from "./01_查找算法-顺序查找";
import binarySearch from "./02_查找算法-二分查找";

// const MAX_LENGTH = 10000000;
// const nums = new Array(MAX_LENGTH).fill(0).map((_, index) => index);

// const num = MAX_LENGTH / 2;

// // const start = new Date().getTime();
// const startTime = performance.now();
// // const index = sequentSearch(nums, num); //索引的位置： 5000000 消耗的时间： 9.52759999036789
// const index = binarySearch(nums, num); // 索引的位置： 5000000 消耗的时间： 0.1466999650001526
// const endTime = performance.now();
// console.log("索引的位置：", index, "消耗的时间：", endTime - startTime);

testOrderSearchEfficiency(sequentSearch); // 数组长度:10000000 - sequentSearch 消耗时间: 11.349200010299683

testOrderSearchEfficiency(binarySearch); // 数组长度:10000000 - binarySearch 消耗时间: 0.033600032329559326
export {};
