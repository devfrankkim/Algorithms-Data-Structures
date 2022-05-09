/*
    소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요.
    제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

    ▣ 입력설명
    첫 줄에 문자열이 입력됩니다.

    ▣ 출력설명
    첫 줄에 중복문자가 제거된 문자열을 출력합니다.

    ▣ 입력예제 1 ksekkset
    ▣ 출력예제 1 kset
*/

// 각 문자열의 순서 유지
// 중복 문자 제거

var str = "ksekkset";

function solution(str) {
  var arr = str.split("");
  var newArr = [];

  for (let x of arr) {
    if (!newArr.includes(x)) newArr.push(x);
  }

  return newArr.join("");
}

console.log(solution(str));

// key: indexOf()
// indexOf() : The indexOf() method returns the "first index" at which a given element can be found in the array, or -1 if it is not present.

function solution1(s) {
  let answer = "";
  //console.log(s.indexOf("K"));
  for (let i = 0; i < s.length; i++) {
    //console.log(s[i], i, s.indexOf(s[i]));
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}
console.log(solution1("ksekkset"));

const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.indexOf(element);

while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}

console.log(indices); //  [0, 2, 4]
