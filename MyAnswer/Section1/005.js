// 최솟값 구하기

// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

// 입력설명
// 첫 번째 줄에 7개의 수가 주어진다.

// 출력설명
// 첫 번째 줄에 가장 작은 값을 출력한다.

// 입력예제 > 5 3 7 11 2 15 17

// 출력예제 > 2

// ========== before ==========
function solution(a, b, c, d, e, f, g) {
  let answer;
  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }
  if (c < answer) {
    answer = c;
  }
  if (d < answer) {
    answer = d;
  }
  if (e < answer) {
    answer = e;
  }
  if (f < answer) {
    answer = f;
  }
  if (g < answer) {
    answer = g;
  }

  return answer;
}

console.log(solution(5, 3, 7, 11, 2, 15, 17));

// ========== before ==========
function solution1(a, b, c, d, e, f, g) {
  let answer = [a, b, c, d, e, f, g];
  return answer.sort((a, b) => a - b)[0];
}

console.log(solution1(5, 3, 7, 11, 2, 15, 17));

// ========== After ==========
function solutionAfter(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  console.log(min);
  for (let i = 0; i < arr.length; i++) {
    console.log(min);
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solutionAfter(arr));
