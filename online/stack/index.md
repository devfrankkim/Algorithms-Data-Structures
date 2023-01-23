```js
// 스택은 서로 관계가 있는 여러 작업을 연달아 수행하면서, 이전의 작업 내용을 저장해 둘 필요가 있을 때 널리 사용됩니다.

class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  pop() {
    return this._arr.pop();
  }
  peek() {
    return this._arr[this._arr.length - 1];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(); // 3
```
