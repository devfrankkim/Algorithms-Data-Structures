/*
  중요 개념! 

  reverse
  every

  for문
  앞에서 부터 ->  arr[i]
  뒤에서 부터  -> [arr.length - i - 1] 

*/
/* 
    앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
    문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 
    회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
    단 회문을 검사할 때 대소문자를 구분하지 않습니다.
*/

let keyword = "goosog";

function solution(str) {
  let newStr = "";
  for (let x of str) {
    newStr = x + newStr;
  }

  console.log(newStr, "newStrnewStr");
  console.log(str, "str111");

  return str === newStr ? "Yes" : "No";
}

solution(keyword.toLowerCase());

function palindrome2(str) {
  let reversed = str.split("").reverse().join("");

  return str === reversed ? "YES" : "NO";
}

palindrome2(keyword.toLowerCase());

function palindrome(str) {
  return str.split("").every((char, i) => char === str[str.length - i - 1])
    ? "YES"
    : "NO";
}

palindrome(keyword.toLowerCase());

function solution1(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] != s[len - i - 1]) return "NO";
  }
  return answer;
}

let str = "goooG";
console.log(solution1(str));
