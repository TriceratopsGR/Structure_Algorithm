class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // *** 特殊处理 告诉js 要比较的对象
  valueOf() {
    return this.age;
  }
}

// 创建Person
const p1 = new Person("why", 18);
const p2 = new Person("kong", 31);
const p3 = new Person("james", 26);
const p4 = new Person("xiaohua", 26);

// 默认情况下 对象是不能进行比较的
console.log(p1 < p2); // true
console.log(p3 > p2); // false
console.log(p3 == p4); // == false  === false
