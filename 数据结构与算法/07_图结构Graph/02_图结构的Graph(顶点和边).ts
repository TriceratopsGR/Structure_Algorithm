class Graph<T> {
  private verteces: T[] = []; // 顶点
  private adjList: Map<T, T[]> = new Map(); // 边： 邻接表

  /**
   * 添加顶点和边的方法
   * @param vertex
   */
  addVertex(vertex: T) {
    // 将顶点添加到数组中保存
    this.verteces.push(vertex);
    // 创建一个 邻接表中的数组
    this.adjList.set(vertex, []);
  }

  /**
   * 添加边
   * @param v1 顶点1
   * @param v2 顶点2
   */
  addEdge(v1: T, v2: T) {
    this.adjList.get(v1)?.push(v2);
    this.adjList.get(v2)?.push(v1);
  }
  /**
   * 遍历图
   */
  traverse() {
    console.log("Graph:");
    this.verteces.forEach((vartex) => {
      const edges = this.adjList.get(vartex);
      console.log(`${vartex} -> ${edges?.join(" ")}`);
    });
  }
}

const graph = new Graph();
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"].map((vertex) => {
//   graph.addVertex(vertex);
// });
// 添加A-I的顶点
for (let i = 65; i < 74; i++) {
  graph.addVertex(String.fromCharCode(i));
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

graph.traverse();

export {};
