/*
첫 줄에 N(3<=N<=1000)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력 된다.
같은 점수가 입력될 경우 높은 등수로 동일 처리한다. 
즉 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.
*/

/*
[100, 100, 100, 99,99 ,98 ,98, 97]
[1, 1, 1, 4, 4, 6, 6, 8]
-------------------------
[87, 89, 92, 100, 76]
[4, 3, 2, 1, 5]
*/

// length 만큼 돌린다.
// 기준점을 정해준다. [1, 1, 1, 1, 1]
// Array.from({ length: n }, () => 1);

// (앞, 뒤) 숫자 비교한다. -> for (let i = 0; i < n; i++) {for (let j = 0; j < n; j++) {}}
// 앞이 더 작으면, 앞에 순위를 올린다. -> if (arr[j] > arr[i]) answer[i]++;

function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));

/*
    
    var arr = [1, 20, 3, 40]
    var arr1 = [1, 1, 1, 1]

    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[i]) arr1[i]++
        }
    }

            // arr[0] > arr[0] 
            // arr[1] > arr[0] arr[0]++
            // arr[2] > arr[0] arr[0]++
            // arr[3] > arr[0] arr[0]++
            // [4, 1, 1, 1] 
            // -----------------------
            // arr[0] > arr[1] 
            // arr[1] > arr[1] 
            // arr[2] > arr[1] 
            // arr[3] > arr[1] arr[1]++ 
            // [4, 2, 1, 1] 
            // -----------------------
            // arr[0] > arr[2] 
            // arr[1] > arr[2] arr[2]++
            // arr[2] > arr[2] 
            // arr[3] > arr[2] arr[2]++
            // [4, 2, 3, 1] 
            // -----------------------
            // arr[0] > arr[3] 
            // arr[1] > arr[3] 
            // arr[2] > arr[3] 
            // arr[3] > arr[3]
            // [4, 2, 3, 1] 
*/
