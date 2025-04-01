import { Graph } from "./graph";
import { LinkedList } from "./linked-list";

const g = new Graph<string>(10);

g.addVertex("A").addVertex("B").addVertex("C").addEdge("A", "C").getGraph();

const l = new LinkedList<string>();

l.append("A").append("B").append("C").prepend("D").printList();

console.log(l.popEnd());
console.log(l.popStart());
console.log(l.popEnd());
console.log(l.popEnd());
console.log(l.popEnd());
console.log(l.popEnd());
l.printList();
