// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

// 입력설명
// 첫 번째 줄에 20이하의 자연수 N이 입력된다..

// 출력설명
// 첫 번째 줄에 1부터 N까지의 합을 출력한다.

// 입력예제 1 6
// 출력예제 1 21

// 입력예제 2 10
// 출력예제 2 55

// 하나씩 줄어든 숫자를 다 더한다. 1이 될 때까지.

// ========== before ==========
function solution(number) {
  let answer = [];
  for (let i = 0; number; number--) {
    answer.push(number);
  }
  return answer.reduce((prev, curr) => prev + curr);
}
console.log(solution(6));
console.log(solution(10));
