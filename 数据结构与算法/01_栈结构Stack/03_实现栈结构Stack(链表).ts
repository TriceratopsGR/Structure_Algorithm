import IStack from "./IStack";

class LinkedStack<T> implements IStack<T> {
  push(element: T): void {
    throw new Error("Method not implemented.");
  }
  pop(): T | undefined {
    throw new Error("Method not implemented.");
  }
  peek(): T | undefined {
    throw new Error("Method not implemented.");
  }
  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }
  size(): number {
    throw new Error("Method not implemented.");
  }
}

function printStack<T>(stack: IStack<T>) {}

// printStack(LinkedStack);

export {};
