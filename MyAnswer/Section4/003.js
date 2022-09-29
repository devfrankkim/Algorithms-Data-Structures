/*
    두 번째 줄부터 M개의 줄에 걸쳐 수학테스트 결과가 학생번호로 주어진다.
    학생번호가 제일 앞에서부터 1등, 2등, ...N등 순으로 표현된다.
    만약 한 줄에 N=4이고, 테스트 결과가 3 4 1 2로 입력되었다면
    3번 학생이 1등, 4번 학생이 2등, 1번 학생이 3등, 2번 학생이 4등을 의미합니다.


    첫 번째 줄에 짝을 만들 수 있는 총 경우를 출력합니다.
*/

// 4*4 = 16
let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

// 앞, 뒤 배열 인덱스만 비교함.
// function solution(test) {
//   let answer = 0;
//   let tmp = [];

//   let numberOfTests = test.length; // 행 크기, 테스트 횟수
//   let numberOfStudents = test[0].length; // 학생 수

//   // let count = 0;

//   for (let current = 1; current <= numberOfStudents; current++) {
//     // 1~4번 학생 current는 멘토가 되는 학생의 번호
//     for (let next = 1; next <= numberOfStudents; next++) {
//       // 1~4번 학생 next는 멘티가 되는 학생의 번호
//       // (current, next);
//       // (1 1), (1 2), .... (4 3), (4 4)

//       // ======== 매 테스트 들어가기 전 0으로 초기화  ========
//       let count = 0;

//       for (let testNumber = 0; testNumber < numberOfTests; testNumber++) {
//         // 0~numberOfTests-1번째테스트 testNumber는 수학테스트 번호
//         let student1Rank = 0;
//         let student2Rank = 0;

//         for (let rank = 0; rank < numberOfStudents; rank++) {
//           // 0~numberOfStudents-1등까지 rank는 각 테스트에서의 등수
//           // console.log("current", current, "next", next);
//           // console.log("rank", rank);

//           // if [0] -> (0)에 있는 학생이 -> 1등
//           //
//           // test[testNumber][rank] -> "rank" 등수를 하는 "학생의 번호"
//           if (test[testNumber][rank] === current) {
//             // rank -> 2, current 1 test[testNumber][rank] 1

//             console.log("testNumber", testNumber, "rank", rank);
//             console.log(
//               "current",
//               current,
//               "test[testNumber][rank]",
//               test[testNumber][rank]
//             );
//           }
//           if (test[testNumber][rank] === current) student1Rank = rank; // student1Rank번 멘토학생이 있다면 등수는 rank
//           if (test[testNumber][rank] === next) student2Rank = rank; // student2Rank번 멘티학생이 있다면 등수는 rank
//         }

//         if (student1Rank < student2Rank) {
//           count++;
//           // console.log("student1Rank rank", student1Rank);
//           // console.log("student2Rank rank", student2Rank);
//         }

//         // console.log(testNumber, "testNumber", count, "count+++++");
//       }

//       // ======== 테스트횟수와 count++된 횟수가 같으면, student1Rank 등수가 모든 테스트에서 높았던 것이 됨 ========

//       if (count === numberOfTests) {
//         tmp.push([current, next]);
//         answer++;
//       }
//     }
//   }
//   // console.log(tmp); // [3, 1] [3, 2] [4, 1]
//   return answer;
// }
/*
    Pseudocode
    function solution(arr) {
        가능한 순서쌍을 모두 만든다.
        count = 0;
        // ex. [1,2]

        for ([prev, next] of 순서쌍) {
            isPossible = true;
            for (array of arr) {
                    // arr의 배열들을 돌면서 해당 순서쌍에서 하나라도 순서가 다를시
                    if (array에서 prev 인덱스 >= next 인덱스) {
                        isPossible = false;
                        break;
                    }
            }
            // 해당 순서쌍이 모든 경우에서 순서가 맞다면
            if (isPossible) ++count;
        }
        return count;
    }
*/

//   let arr = [
//     [3, 4, 1, 2],
//     [4, 3, 2, 1],
//     [3, 1, 4, 2],
//   ];

// 배열 안에서 특정 학생의 인덱스를 찾는 함수를 정의해줌
function findMyIndex(student, arr) {
  console.log("arrrrrr", arr);

  for (let current = 0; current < arr.length; current++) {
    if (arr[current] === student) {
      return current;
    }
  }
}

function solution(test) {
  const numberOfStudents = test[0].length;

  let count = 0;
  const pairs = [];

  // 가능한 순서쌍을 pairs 배열에 모두 담아줌
  // [1, 1], [1, 2], ..., [4, 3], [4, 4]
  for (let current = 1; current < numberOfStudents + 1; current++) {
    for (let next = 1; next < numberOfStudents + 1; next++) {
      pairs.push([current, next]);
    }
  }
  console.log(pairs, "pairs");

  // pairs 배열을 돌며 멘토 - 멘티가 가능한 경우만 count
  for ([studentA, studentB] of pairs) {
    let isPossible = true;

    for (arr of test) {
      if (findMyIndex(studentA, arr) >= findMyIndex(studentB, arr)) {
        isPossible = false;
        break;
      }
    }

    // 모든 test에 대한 검증이 끝난 이후에도 isPossible === true 라면 count
    if (isPossible) count++;
  }

  return count;
}

console.log(solution(arr));

/*
var test = [
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 2],
  [2, 3],
  [2, 4],
  [3, 1],
  [3, 2],
  [3, 3],
  [3, 4],
  [4, 1],
  [4, 2],
  [4, 3],
  [4, 4],
];

*/

/*

 [3, 4, 1, 2]라는 배열에서 index값이 순위이고 안에 숫자요소는 학생이라고 이해하셔야 합니다. 





이 문제 코드에 있는 4중 for문의 각 인덱스 변수가 무엇을 의미하는지 알아야 합니다.

첫 번째 for문의 인덱스인 i는 멘토가 되는 학생의 번호입니다.(1부터 n번까지)

두 번째 for문의 인덱스인 j는 멘티가 되는 학생의 번호입니다.(1부터 n번까지)

세 번째 for문의 인덱스인 k는 수학 테스트 번호입니다.(0번째 테스트부터 m-1번째 트스트까지)

네 번째 for문의 인덱스인 s는 각 테스트에서의 등수를 의미합니다. (0등부터 n-1등까지)

이것을 이해하고 영상을 다시 보시면 이해가 갈 것입니다.

if(test[k][s]===i) pi = s;

위에 코드의 test[k][s]의 값은  k번째 테스트에서 s등을 하는 "학생의 번호"입니다. 즉 

if(test[k][s]===i) 이 참이되면 s는 i번 학생의 등수가 되는 것이고 그것을 pi에 저장하는 것입니다.

따라서 pi는 멘토가 되는 i번 학생의 등수인 것입니다.

그러면 pj는 멘티가 되는 j번 학생의 등수가 되겠죠.
*/
