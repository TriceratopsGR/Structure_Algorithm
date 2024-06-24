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
  /**
   * 广度优先
   */
  bfs() {
    // 1. 判断是否有顶点
    if (this.verteces.length === 0) return;

    // 2. 创建队列结婚访问每一个顶点
    const queue: T[] = [];
    queue.push(this.verteces[0]);

    // 3. 创建Set 结构，记录某一个顶点是否被访问
    const visited = new Set<T>();
    visited.add(this.verteces[0]);

    // 4. 遍历队列中的每个顶点
    while (queue.length) {
      // 访问队列中第一个顶点
      const vertex = queue.shift()!;
      console.log(vertex);

      // 相邻的顶点
      const neighbors = this.adjList.get(vertex);
      // 没有值直接跳过当前循环
      if (!neighbors) continue;
      for (const nei of neighbors) {
        // 判断有没有被访问过
        if (!visited.has(nei)) {
          visited.add(nei);
          queue.push(nei);
        }
      }
    }
  }

  /**
   * 深度优先
   */
  dfs() {
    //1. 判断是否有顶点
    if (this.verteces.length === 0) return;

    // 2. 创建栈结果
    const stack: T[] = [];
    stack.push(this.verteces[0]);

    // 3.创建Set结构
    const visited = new Set<T>();
    visited.add(this.verteces[0]);

    // 4. 从第一个顶点开始访问
    while (stack.length) {
      const vertex = stack.pop()!;
      console.log(vertex);

      const neighbors = this.adjList.get(vertex);
      if (!neighbors) continue; // 类型缩小
      for (let i = neighbors.length - 1; i >= 0; i--) {
        const nei = neighbors[i];
        if (!visited.has(nei)) {
          visited.add(nei);
          stack.push(nei);
        }
      }
    }
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

// graph.bfs();

graph.dfs();

export {};
