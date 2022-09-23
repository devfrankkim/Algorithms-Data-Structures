// 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램 을 작성하세요.

// 5
// 23313
// 11223

// 각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.
// A
// B
// A
// B
// D

/*

▣ 입력설명
첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다. 
두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다. 
세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.
*/

// 1:가위, 2:바위, 3:보
// 1 < 2  - B WIN
// 2 < 3 - B WIN
// 3 < 1 - B WIN
// 가위 < 바위;
// 바위 < 보;
// 보 < 가위;

// (1 < 2 < 3) (3 < 1)
// 가위 === 가위 D
// 바위 === 바위 D
// 보  === 보  D

function getNumbers(a, b) {
  if (a < 0 || b < 0 || a > 3 || b > 3) return;

  let answer = a < b ? "B" : "A";

  if (a + b === 4) {
    answer = a < b ? "A" : "B";
  }

  if (a === b) {
    answer = "D";
  }

  return answer;
}

getNumbers(1, 2);

function solution(a, b) {
  let answer = "";

  for (let i = 0; i < a.length; i++) {
    if (a[i] < 0 || b[i] < 0 || a[i] > 3 || b[i] > 3)
      return "protect from other numbers";
    else if (a[i] === b[i]) answer += "D ";
    else if (a[i] === 1 && b[i] === 3) answer += "A ";
    else if (a[i] === 2 && b[i] === 1) answer += "A ";
    else if (a[i] === 3 && b[i] === 2) answer += "A ";
    else answer += "B ";
  }

  return answer;
}

let a = [2, 3, 3, 4, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
