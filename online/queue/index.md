```js
/*
    큐(queue)는 다음과 같은 성질을 갖는 자료형입니다.

    데이터를 집어넣을 수 있는 선형(linear) 자료형입니다.
    먼저 집어넣은 데이터가 먼저 나옵니다. 이 특징을 줄여서 FIFO(First In First Out)라고 부릅니다.
    데이터를 집어넣는 enqueue, 데이터를 추출하는 dequeue 등의 작업을 할 수 있습니다.
    
    큐는 순서대로 처리해야 하는 작업을 임시로 저장해두는 버퍼(buffer)로서 많이 사용됩니다.
*/

class Queue {
  constructor() {
    this._arr = [];
  }
  enqueue(item) {
    this._arr.push(item);
  }
  dequeue() {
    return this._arr.shift();
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); // 1
```
