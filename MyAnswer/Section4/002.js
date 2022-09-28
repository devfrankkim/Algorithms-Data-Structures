/*
    중요 포인트!
    
    함수 따로 빼내서, 유효검사 해준다. for문 false true

    parseInt(Math.sqrt(n)) 사용법.
    소수 검사. (1, n) 자신만 가지고 있는 숫자.

    (1)숫자 뒤집기 while
     * 자기 자신 * 10 + 몫 
     * while 0 이면 falsy 값 loop break 된다.

      while (x) {
        let t = x % 10;
        res = res * 10 + t;
        x = parseInt(x / 10);
    }

    (1)숫자 뒤집기 내장함수.
    Number(x.split('').reverse().join(''))
*/

/*
    N개의 자연수가 입력되면 각 자연수를 뒤집은 후,
    그 뒤집은 수가 소수이면, 그 소수를 출력하는 프로그램을 작성하세요. 
    예를 들어 32를 뒤집으면 23이고, 23은 소수이다.
    그러면 23을 출력한다.
    단 910를 뒤집으면 19로 숫자화 해야 한다. 
    첫 자리부터의 연속된 0은 무시한다.
*/

// 32 55 62 20 250 370 200 30 100
// 23, 55, 26, 2, 52, 73, 2, 3, 1

// [23, 2, 73, 2, 3]

// 25 vs 52

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
