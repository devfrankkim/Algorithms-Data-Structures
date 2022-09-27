/*
 중요 개념!

 무조건 배열로 받아서 풀 필요 없이, 문자 or 숫자 변수로도 돌려서 응용할 수 있다.
 변수 새로 만들어서 응용하기!

*/
/*
1번 문제가 맞는 경우에는 1점으로 계산한다. 앞의 문제에 대해서는 답을 틀리다가 답이 맞는 처음 문제는 1점으로 계산한다. 
또한, 연속으로 문제의 답이 맞는 경우에서 두 번째 문제는 2점, 세 번째 문제는 3점, ...,
K번째 문제는 K점으로 계산한다. 
틀린 문제는 0점으로 계 산한다.
*/

const test = [1, 0, 1, 1, 1, 0, 1, 1, 0];

function getTest(test) {
  let answer = [];
  let sum = 0;

  for (let i = 0; i < test.length; i++) {
    if (test[i] === 0) answer.push(0);
    if (test[i] === 1) {
      if (answer[i - 1] && answer[i - 1] > 0) {
        answer.push(answer[i - 1] + 1);
      } else {
        answer.push(1);
      }
    }
  }

  for (let i = 0; i < answer.length; i++) {
    sum += answer[i];
  }
  return sum;
}

getTest(test);

function solution(arr) {
  let answer = 0,
    cnt = 0;
  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr)); // 10
