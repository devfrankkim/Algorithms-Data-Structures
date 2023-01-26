```js
/*
    https://helloworldjavascript.net/pages/282-data-structures.html
    
    트리(tree)는 여러 데이터가 계층 구조 안에서 서로 연결된 형태를 나타낼 때 사용됩니다.

    트리를 다룰 때 사용되는 몇 가지 용어를 살펴보겠습니다.
    노드(node) - 트리 안에 들어있는 각 항목을 말합니다.
    자식 노드(child node) - 노드는 여러 자식 노드를 가질 수 있습니다.
    부모 노드(parent node) - 노드 A가 노드 B를 자식으로 갖고 있다면, 노드 A를 노드 B의 '부모 노드'라고 부릅니다.
    뿌리 노드(root node) - 트리의 가장 상층부에 있는 노드를 말합니다.
    잎 노드(leaf node) - 자식 노드가 없는 노드를 말합니다.
    조상 노드(ancestor node) - 노드 A의 자식을 따라 내려갔을 때 노드 B에 도달할 수 있다면, 노드 A를 노드 B의 조상 노드라고 부릅니다.
    자손 노드(descendant node) - 노드 A가 노드 B의 조상 노드일 때, 노드 B를 노드 A의 자손 노드라고 부릅니다.
    형제 노드(sibling node) - 같은 부모 노드를 갖는 다른 노드를 보고 형제 노드라고 부릅니다.
    아래는 아주 간단한 형태의 Node를 구현한 예입니다.

    트리는 계층 구조를 나타내기 위해, 또한 계층 구조를 통해 알고리즘의 효율을 높이고자 할 때 널리 사용됩니다.
*/

class Node {
  constructor(content, children = []) {
    this.content = content;
    this.children = children;
  }
}

const tree = new Node("hello", [
  new Node("world"),
  new Node("and"),
  new Node("fun", [new Node("javascript!")]),
]);

function traverse(node) {
  console.log(node.content);
  for (let child of node.children) {
    traverse(child);
  }
}

traverse(tree);
// hello world and fun javascript!
```
