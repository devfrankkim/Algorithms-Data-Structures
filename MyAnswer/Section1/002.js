/* 
삼각형 판별하기
길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 
이 세 막대로 삼각형을 만들 수 있으면 “YES"를 출력하고, 
만들 수 없으면 ”NO"를 출력한다.

- 입력설명
첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
- 출력설명
첫 번째 줄에 “YES", "NO"를 출력한다.

ex) (1)
- 입력예제 1
6 7 11
- 출력예제 1
YES

ex) (2)
- 입력예제 1
13 33 17
- 출력예제 1
NO

삼각형을 만들기 위해서는 가장 긴 변을 제외한 나머지 2개의 변의 합이 가장 긴 변보다 길어야 한다
*/

// max값을 먼저 찾는다.
// 그 다음 두개를 더한값이 긴거 보다 크면 return yes

function solution(a, b, c) {
  let max;
  let two = [];
  if (a < b) {
    max = b;
  } else {
    max = a;
  }

  if (max < c) {
    max = c;
  }

  if (max === a) {
    two.push(b, c);
  } else if (max === b) {
    two.push(a, c);
  } else {
    two.push(a, b);
  }

  two = two.reduce((prev, next) => prev + next);
  two > max ? console.log("yes") : console.log("no");
}

solution(1, 3, 2);
