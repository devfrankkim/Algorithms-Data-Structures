// 100이하의 자연수 A,B,C 를 입력받아 세수중 가장 작은 값을 출력하는 프로그램을 작성하세요.(정렬 사용 하면 안됩니다.)

// 입력설명 첫번째 줄에 100이하의 세자연수가 입력된다.
// 출력설명: 첫번쨰 줄에 가장 작은 수를 출력하다.

// 예제: 6 5 11
// 출력예제: 5

// 첫번째 값이 두번째 값 보다 작으면 세번쨰값이랑 비교해서 더 작으면 첫번 째 return
// 두번째 값이 첫번째 값보다 크면 첫번째와 세번쨰 비교한다.

// Before
let maxNumber = 100;
function getNumbers(first, second, third) {
  if (first <= maxNumber && second <= maxNumber && third <= maxNumber) {
    if (first < second && first < third) {
      return first;
    } else if (second < first && second < third) {
      return second;
    } else if (third < first && third < second) {
      return third;
    }
  } else {
    return "Add something smaller than 100";
  }
}

console.log(getNumbers(6, 5, 11));

// After
function solution(a, b, c) {
  let answer;
  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }

  if (c < answer) {
    answer = c;
  }

  return answer;
}

console.log(solution(2, 5, 1));
