/*
    주어진 숫자까지의 모든 숫자 더하기
*/

// ===== (1) for 반복문 사용하기 =====
// ===== (2) recursion - 재귀 사용하기(n > 1일 때 sumTo(n) = n + sumTo(n-1)) =====
// ===== (3) 등차수열 공식 사용하기 =====

// 더 생각해보기 1: 세 가지 방법 중 어떤 방법이 가장 빠른가요? 어떤 방법이 가장 느린가요? 이유도 함께 제시.
// 더 생각해보기 2: 재귀를 사용해 sumTo (100000)를 계산할 수 있을까요?

function test1(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumTo(n) {
  if (n == 1) return 1;

  return n + sumTo(n - 1);
}

function sumTo(n) {
  return (n * (n + 1)) / 2;
}
