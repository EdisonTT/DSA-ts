import {
  MaximumVertexExceeded,
  VertexAlreadyExist,
  VertexNotFound,
} from "./error";
import { AdjacencyList } from "./interface";

/**
 * This class helps to create a Directed Graph.
 */
export class Graph<T> {
  private _noOfVertices: number = 0;
  private _adjacencyList: AdjacencyList<T>;

  constructor(noOfVertices: number) {
    this._noOfVertices = noOfVertices;
    this._adjacencyList = new Map();
  }

  addVertex(v: T): Graph<T> {
    if (this._adjacencyList.has(v)) throw new VertexAlreadyExist(String(v));

    if (this._adjacencyList.size >= this._noOfVertices)
      throw new MaximumVertexExceeded();
    this._adjacencyList.set(v, []);
    return this;
  }

  addEdge(v: T, w: T): Graph<T> {
    if (!this._adjacencyList.has(v) || !this._adjacencyList.has(w))
      throw new VertexNotFound();
    this._adjacencyList.get(v)!.push(w);
    return this;
  }

  getGraph() {
    console.log(this._adjacencyList);
  }
}
