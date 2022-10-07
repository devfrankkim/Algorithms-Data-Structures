/*

    중요개념!

      sort ->  내림차순
      앞에서부터 -> 3개씩 더하기. 
      앞, 뒤 값 같으면 ++1 후에 해보기. 
      3개 값 나눠서 for문 돌리고, 처음 3개 해보기.

      중복제거!  
      Set() 연산자를 사용하여 중복제거 ( 여러개가 있어도 중복된 값을 한번만 들어간다 )
      tmp에 중복이 제거된 숫자들을 넣는다.
      
      처음에 sum 배열 sort가 제대로 작동하지 않아서 헤맸는데 
      sort는 기본적으로 숫자를 문자열로 변환하여 정렬을 수행하기 때문에 정렬이 의도대로 실행되지 않은 것이었다.

      Set 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있습니다.
      카드 합이 중복된 값으로 나올 경우 배열로 풀 때는 잘못된 답이 나올 것이다. 
      Set 객체를 사용하는 게 맞는 풀이
*/

/*
    Pseudo code 
        sort array 
        i만큼 돌린다. 
        let c1 = arr[i] + arr[i+1] + arr[i+2]
        newArr = [c1, ]
*/

// [1,1,1,2,2,3,...., 99, 100]
// 같은 번호가 있을 수 있음.
// 기록한 값 중 K번째로 큰 수를 출력 하는 프로그램을 작성하세요.

function solution(arr) {
  arr.sort((a, b) => b - a);
  const arrLength = arr.length;
  let answer = 0;
  // if(i === j) continue -> 다음 반복문

  let newArr = [];

  for (i = 0; i < arrLength; i++) {
    let sum = arr[i] + arr[i + 1];
    for (j = i + 2; j < arrLength; j++) {
      // if(i === j) continue -> 다음 반복문
      if (i === j) continue;

      sum = sum + arr[j];
      newArr.push(sum);
    }
    console.log(newArr);
    newArr.sort((a, b) => b - a);
    console.log(newArr);
    // answer = Math.max(answer, newArr[2]);
  }
}

var arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

solution(arr);

/*
    현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다. 
    같은 숫자의 카드가 여러장 있을 수 있습니다. 
    현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려 고 합니다. 
    3장을 뽑을 수 있는 모든 경우를 기록합니다. 
    기록한 값 중 K번째로 큰 수를 출력 하는 프로그램을 작성하세요.
    만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고 
    K값이 3이라면 K번째 큰 값 은 22입니다.
    첫 줄에 K번째 수를 출력합니다. K번째 수는 반드시 존재합니다.

    10 3
    13 15 34 23 45 65 33 11 26 42
    143
*/

function solution1(n, k, card) {
  let tmp = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }

  let answer = Array.from(tmp).sort((a, b) => b - a);
  answer = a[k - 1];
  return answer;
}

console.log(solution1(10, 3, arr));

function solution1(n, k, card) {
  let tmp = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }

  let answer = [...tmp].sort((a, b) => b - a);
  answer = answer[k - 1];
  return answer;
}

console.log(solution1(10, 3, arr));
