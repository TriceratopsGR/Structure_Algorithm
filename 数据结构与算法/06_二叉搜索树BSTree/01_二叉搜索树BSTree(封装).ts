import Node from "../IList/Node";
import { btPrint } from "hy-algokit"; // Binary Tree Print 打印二叉树
// 类的继承
class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
}

class BSTree<T> {
  private root: TreeNode<T> | null = null;
}

export {};
