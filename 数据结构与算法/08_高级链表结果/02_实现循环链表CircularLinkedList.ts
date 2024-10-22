import LinkedList from "./01_实现单向链表LinkedList";

class CircularLinkedList<T> extends LinkedList<T> {
  append(value: T) {
    // 去调用父类的append方法
    super.append(value);
    // 拿到最后的节点next指向第一个节点
    this.tail!.next = this.head;
  }

  insert(value: T, position: number): boolean {
    const isSuccess = super.insert(value, position);
    // 如果是最后一个节点 或者 第一个节点
    if (isSuccess && (position === this.length - 1 || position === 0)) {
      this.tail!.next = this.head;
    }
    return isSuccess;
  }

  removeAt(position: number): T | null {
    const value = super.removeAt(position);
    if (value && this.tail && (position === 0 || position === this.length)) {
      this.tail.next = this.head;
    }
    return value;
  }

  // traverse(): void {}
}

const clinkedList = new CircularLinkedList<string>();

clinkedList.append("aaa");
clinkedList.append("bbb");
clinkedList.append("ccc");
clinkedList.append("ddd");
clinkedList.append("eee");
clinkedList.traverse();

console.log("------------ 测试insert ------------");
clinkedList.insert("abc", 0);
clinkedList.traverse();
clinkedList.insert("cba", 2);
clinkedList.insert("nba", 6);
clinkedList.traverse();

console.log("------------ 测试removeAt ------------");
clinkedList.removeAt(0);
clinkedList.removeAt(0);
clinkedList.traverse();

console.log(clinkedList.removeAt(2));
clinkedList.traverse();
console.log(clinkedList.removeAt(3));
clinkedList.traverse();
console.log(clinkedList.removeAt(3));
clinkedList.traverse();

console.log("------------ 测试get ------------");
console.log(clinkedList.get(0));
console.log(clinkedList.get(1));
console.log(clinkedList.get(2));
// ts-node 04...
console.log("------------ 测试update ------------");
clinkedList.update("kkk", 1);
clinkedList.update("yyy", 2);
console.log(clinkedList.get(1));

console.log("------------ 测试indexOf ------------");
console.log(clinkedList.indexOf("kkk"));
console.log(clinkedList.indexOf("yyy"));
clinkedList.traverse();

console.log("------------ 测试remove ------------");
console.log(clinkedList.remove("yyy"));
console.log(clinkedList.remove("kkk"));
clinkedList.append("eee");

console.log(clinkedList.removeAt(0));

console.log(clinkedList.size());
clinkedList.traverse();
console.log(clinkedList.isEmpty());
