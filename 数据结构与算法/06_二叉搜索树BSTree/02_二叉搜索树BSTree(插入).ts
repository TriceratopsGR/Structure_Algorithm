import Node from "../IList/Node";
import { btPrint } from "hy-algokit"; // Binary Tree Print 打印二叉树
// 类的继承
class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
}

class BSTree<T> {
  private root: TreeNode<T> | null = null;

  print() {
    btPrint(this.root);
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

  // 递归
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

// 打印
// btPrint(bst.root);

bst.print();

export {};
