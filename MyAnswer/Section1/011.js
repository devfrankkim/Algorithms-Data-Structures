/*
한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램 을 작성하세요.

▣ 입력설명
첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

▣ 출력설명
첫 줄에 대문자의 개수를 출력한다.

▣ 입력예제 1 KoreaTimeGood

▣ 출력예제 1 3
*/

// KoreaTimeGood 전체 돌린다.
// 65 - 90 아스키코드표

let str = "KoreaTimeGood";
let answer = 0;

for (let x of str) {
  if (65 <= x.charCodeAt() && x.charCodeAt() <= 90) {
    answer++;
  }
}
console.log(answer);

// 전체를 대문자로 바꿔놓고, 원본이랑 비교하기.

function solution2(s) {
  let answer = 0;
  for (let x of s) {
    if (x === x.toUpperCase()) answer++;
  }

  return answer;
}

console.log(solution2(str));
