class Graph<T> {
  private verteces: T[] = []; // 顶点
  private adjList: Map<T, T[]> = new Map(); // 边： 邻接表
}
export {};
