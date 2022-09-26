/*
알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 
반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 
문자열을 압축하는 프로그램을 작성하시오. 

단 반복횟수가 1인 경우 생략합니다.

첫 줄에 압축된 문자열을 출력한다.
KKHSSSSSSSE
-> K2HS7E
*/

let word = "KKKHSSSSSSSE";
// -> K2HS7E

function solution(word) {
  let arr = word.split("");
  let newArr = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    let nextStr = arr[i + 1];

    if (count === 0) {
      if (str === nextStr) {
        count++;
        newArr.push(str);
      }

      if (str !== nextStr) {
        newArr.push(str);
      }
    }

    if (count >= 1) {
      if (str === nextStr) {
        count++;
      }

      if (str !== nextStr) {
        newArr.push(count);
        count = 0;
      }
    }
  }

  return newArr.join("").toString();
}

console.log(solution(word));

function solution3(word) {
  let arr = word.split("");
  let answer = "";
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    let nextStr = arr[i + 1];

    if (count === 0) {
      if (str === nextStr) {
        count++;
        answer += str;
      }

      if (str !== nextStr) {
        answer += str;
      }
    }

    if (count >= 1) {
      if (str === nextStr) {
        count++;
      }

      if (str !== nextStr) {
        answer += count;
        count = 0;
      }
    }
  }

  return answer;
}

solution3(word);

function solution1(word) {
  let answer = "";
  let cnt = 1;
  word = word + " ";
  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] === word[i + 1]) cnt++;
    else {
      answer += word[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}

console.log(solution1(word));

function solution4(word) {
  let answer = "";
  let count = 1;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i + 1]) count++;
    else {
      answer += word[i];
      if (count > 1) answer += count;
      count = 1;
    }
  }

  return answer;
}

solution4(word);

// -> K2HS7E
