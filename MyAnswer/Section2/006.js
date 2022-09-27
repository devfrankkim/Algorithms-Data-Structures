/*
    중요 개념! 

    이중 for문 순서.
    for문이 돌때마다 다른 변수에 값 저장 후, sum 변수를 초기화 해주는 것.
    자바스크립트 스코프 개념 정리할 것.
*/

// N*N의 격자판이 주어지면
// 각 행의 합,
// 각 열의 합,
// 두 대각선의 합 중
// 가 장 큰 합을 출력합니다.

// 10 13 10 12 15
// 12 39 30 23 11
// 11 25 50 53 15
// 19 27 29 37 27
// 19 13 30 13 19
// -> 155

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

function solution(arr) {
  let n = arr.length;

  // row, column
  let answer1 = Number.MIN_SAFE_INTEGER;
  // diagonal
  let answer2 = Number.MIN_SAFE_INTEGER;

  // 행의 합
  let sum1 = 0;
  // 열의 합
  let sum2 = 0;

  // ============= row vs column =============
  for (let i = 0; i < n; i++) {
    //초기화
    sum1 = 0;
    sum2 = 0;

    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j]; // (0,0), (0,1), (0,2), (0,3) ....
      sum2 += arr[j][i]; // (0,0), (1,0), (2,0), (3,0) ....
    }

    answer1 = Math.max(answer1, sum1, sum2);
  }

  // ============= left diagonal vs right diagonal =============
  // 왼우대각선 sum3 저장
  let sum3 = 0;
  // 우왼대각선 sum4 저장
  let sum4 = 0;

  console.log(arr);
  for (let i = 0; i < n; i++) {
    // ((가로,세로 -> max), (왼우대각선 arr[i][i]), (우왼대각선 arr[i][n - i - 1];))
    sum3 += arr[i][i];
    sum4 += arr[i][n - i - 1];
  }

  answer2 = Math.max(answer2, sum3, sum4);

  return Math.max(answer1, answer2);
}

console.log(solution(arr));
