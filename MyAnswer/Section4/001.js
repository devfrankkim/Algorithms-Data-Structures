/*

중요개념!
 나머지 ---> n%10 
 몫 ---> n/10 (소수점 고려해야함.)
 Math.floor(n%10)
 parseInt(n/10)
 
while (i) { // i가 0이 되면 조건이 falsy가 되므로 반복문이 멈춘다.
  
*/

/*
    N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 
    그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요. 
    자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 
    만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
*/

// 배열 크게 한번 돌린다. 그 안에서 [i]를 한번 더 돌려서 합친다(sum), 그리고 answer 랑 비교한다. 크면 answer
// **** 만약, 값이 큰게 여러개라면? 조건을 해결해줘야함.-> 숫자 비교해서 크다면 새로운 index 저장 + 새로운 number 저장 ****

let arr = [137, 128, 460, 603, 731, 40, 521, 123];

function getTest(arr) {
  let index = 0;
  let tempSum = 0;
  let answer = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    tempSum = 0;

    // let sum = x.toString().split('').reduce(a,b => a+Number(b), 0)
    for (let x of arr[i].toString()) {
      tempSum += Number(x);
    }

    if (Number(answer) < tempSum || arr[index] < arr[i]) {
      answer = tempSum;
      index = i;
    }
  }

  return { sum: answer, value: arr[index], index };
}

console.log(getTest(arr));

// if (Number(answer) !== tempSum && Number(answer) < tempSum) {
//   answer = tempSum;
//   index = i;
// }

// if (Number(answer) === tempSum && arr[index] < arr[i]) {
//   answer = tempSum;
//   index = i;
// }

function solution(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0,
      tmp = x;

    // let sum = x.toString().split('').reduce(a,b => a+Number(b), 0)
    console.log(tmp, "tmppppp while above");
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
      console.log(tmp, "tmppppp inside while");
    }
    // console.log(tmp, "tmppppp while under");

    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
}

console.log(solution(arr));
