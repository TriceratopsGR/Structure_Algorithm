import Node from "../IList/Node";
import { btPrint } from "hy-algokit"; // Binary Tree Print 打印二叉树
// 类的继承
class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  // 当前节点的父节点
  parent: TreeNode<T> | null = null;

  // 判断当前节点是父节点的左子节点
  get isLeft(): boolean {
    // 啊 不理解家人们
    return !!(this.parent && this.parent.left === this);
  }

  // 判断当前节点是父节点的右子节点
  get isRight(): boolean {
    return !!(this.parent && this.parent.right === this);
  }
}

class BSTree<T> {
  private root: TreeNode<T> | null = null;

  print() {
    btPrint(this.root);
  }
  private searchNode(value: T): TreeNode<T> | null {
    let current = this.root;
    let parent: TreeNode<T> | null = null;

    while (current) {
      if (current.value === value) {
        return current;
      }
      parent = current;
      if (current.value < value) {
        current = current.right;
      } else {
        current = current.left;
      }
      // 如果current有值,那么current保存自己的父节点
      if (current) current.parent = parent;
    }
    return null;
  }

  /** 插入数据的操作 */
  insert(value: T) {
    // 1. 根据传入的value 创建一个 node(TreeNode) 节点
    const newNode = new TreeNode(value);

    // 2. 判断当前是否有了根节点
    if (!this.root) {
      this.root = newNode;
    } else {
      // 树里面有其他值的时候
      this.insertNode(this.root, newNode);
    }
  }

  /**
   *  递归
   * @param node
   * @param newNode
   */
  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    // 小左 大右
    if (newNode.value < node.value) {
      // 去左边查找空白位置
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // 去右边查找空白位置
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  /** 遍历的操作 */
  // 先序遍历
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root);
  }
  private preOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      console.log(node.value); // 先访问根节点
      this.preOrderTraverseNode(node.left); // 左子树
      this.preOrderTraverseNode(node.right); // 右子树
    }
  }
  // 非递归
  // private preOrderTraversalNoRecursion() {
  //   let stack: Node<T>[] = [];
  //   let current: TreeNode<T> | null = this.root;
  //   while (current !== null || stack.length !== 0) {
  //     while (current !== null) {
  //       console.log(current.value);
  //       stack.push(current);
  //       current = current.left;
  //     }
  //     current = stack.pop();
  //     current = current?.right
  //   }
  // }

  //中序遍历
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root);
  }

  private inOrderTraverseNode(node: TreeNode<T> | null) {
    // 判断是否有值
    if (node) {
      this.inOrderTraverseNode(node.left); // 先访问 左子树
      console.log(node.value); // 根节点
      this.inOrderTraverseNode(node.right); // 右子树
    }
  }

  // 非递归
  // inOrderTraverseNonRecursive() {
  //   let stack: Node<T>[] = [];
  //   let current: Node<T> | null = this.root;
  //   while (current !== null || stack.length !== 0) {
  //     while (current !== null) {
  //       stack.push(current);
  //       current = current.left;
  //     }
  //     current = stack.pop();
  //     console.log(current?.value);
  //     current = current.right;
  //   }
  // }

  // 后序遍历
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root);
  }

  private postOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.postOrderTraverseNode(node.left);
      this.postOrderTraverseNode(node.right);
      console.log(node.value);
    }
  }
  // 非递归
  // postOrderTraverselNoRecursion() {
  //   let stack: Node<T>[] = [];
  //   let current: Node<T> | null = this.root;
  //   let lastVisitedNode: Node<T> | null = null;

  //   while (current !== null || stack.length !== 0) {
  //     while (current) {
  //       stack.push(current);
  //       current = current.left;
  //     }

  //     current = stack[stack.length - 1];
  //     if (current.right === null || current.right === lastVisitedNode) {
  //       console.log(current.value);
  //       lastVisitedNode = current;
  //       stack.pop();
  //       current = null;
  //     } else {
  //       current = current.right;
  //     }
  //   }
  // }

  // 层序遍历
  levelOrderTraverse() {
    // 用队列来处理
    // 伪代码：
    // 1. 访问队列中的出队元素 * 11 出队，并且访问
    // 2. 将出队的节点的左子节点和右子节点分别加入队列

    // 1. 没有根节点直接return
    if (!this.root) return;
    // 2. 创建队列结构
    const queue: TreeNode<T>[] = [];
    // 第一个节点根节点
    queue.push(this.root);
    //3. 遍历队列中所有的节点 依次出队
    while (queue.length) {
      // 3.1 访问节点的过程
      const current = queue.shift()!;
      console.log(current.value);

      // 3.2 将左子节点放入到队列中
      if (current.left) {
        queue.push(current.left);
      }

      //3.3 将右子节点放入队列中
      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  /** 最值操作  最大 & 最小 */
  getMaxValue(): T | null {
    let current = this.root;
    while (current && current.right) {
      current = current.right;
    }
    return current?.value ?? null;
  }
  getMinValue(): T | null {
    let current = this.root;
    while (current && current.left) {
      current = current.left;
    }
    return current?.value ?? null;
  }

  /** 搜索 20 =》 boolean*/
  search(value: T): boolean {
    // 取反 再 取反
    return !!this.searchNode(value);
  }
  searchL(value: T): boolean {
    return this.searchNode1(this.root, value);
  }

  private searchNode1(node: TreeNode<T> | null, value: T): boolean {
    // 1,如果节点为null 直接返回
    if (node === null) return false;

    // 2. 判断node 节点的value 和传入的value比较大小
    if (node.value > value) {
      // 左边查找
      return this.searchNode1(node.left, value);
    } else if (node.value < value) {
      // 右边查找
      return this.searchNode1(node.right, value);
    } else {
      return true;
    }
  }

  /** 删除*/
  // 后继节点
  private getSuccessor(delNode: TreeNode<T>): TreeNode<T> {
    // 获取右子树
    let current = delNode.right;
    let successor: TreeNode<T> | null = null;
    while (current) {
      successor = current;
      current = current.left;
      if (current) {
        current.parent = successor;
      }
    }
    // 找到后继节点
    console.log("删除节点：", delNode.value, "后继节点：", successor?.value);
    if (successor !== delNode.right) {
      successor!.parent!.left = successor!.right ?? null;
      successor!.right = delNode.right;
    }
    // 一定要进行的操作: 将删除节点的left, 赋值给successor.left
    successor!.left = delNode.left;
    return successor!;
  }

  remove(value: T): boolean {
    //1. 先去搜索是否有这个值
    const current = this.searchNode(value);
    if (!current) return false;

    // 2. 获取到三个东西： 当前节点/ 父节点/ 是属于父节点的左子节点，还是右子节点
    let replaceNode: TreeNode<T> | null = null; // 拿到要替换的节点
    if (current.left === null && current.right === null) {
      // 2. 如果删除的是叶子节点  没有子节点'
      replaceNode = null;
    } else if (current.right === null) {
      // 3. 只有一个子节点： 只有左子节点
      replaceNode = current.left;
    } else if (current.left === null) {
      // 4. 只有一个子节点： 只有左子节点
      replaceNode = current.right;
    } else {
      // 5. 有两个子节点
      const cuccessor = this.getSuccessor(current); // 后继节点
      replaceNode = cuccessor;
    }

    if (current === this.root) {
      this.root = replaceNode;
    } else if (current.isLeft) {
      current.parent!.left = replaceNode;
    } else {
      current.parent!.right = replaceNode;
    }

    return true;
  }
}

const bst = new BSTree<number>();

bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);

// bst.preOrderTraverse();
// bst.inOrderTraverse();
// bst.postOrderTraverse();
// bst.levelOrderTraverse();
// console.log(bst.getMaxValue());
// console.log(bst.getMinValue());
bst.print();

// bst.remove(11);
bst.remove(11);
bst.print();
bst.remove(15);
bst.print();
bst.remove(9);
bst.print();
export {};
