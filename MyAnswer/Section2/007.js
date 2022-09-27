/*
    중요 개념! 

    이중 for문 순서.
    [i][j] -> current
    [i][j-1] -> left
    [i][j+1] -> right
    [i-1][j] -> top
    [i+1][j] -> bottom
    
*/

/*
상하좌우 숫자보다 큰 숫자는 봉우리 지역.
    [5, 3 7, 2, 3]
    [3 7 1 6 1]
    [7 2 5, 3 4,]
    [4 3 6 4 1]
    [8 7 3 5, 2]
*/

// current -> [i][j]
// [i][j-1] -> left
// [i][j+1] -> right
// [i-1][j] -> top
// [i+1][j] -> bottom

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

function solution(arr) {
  let arrLength = arr.length;
  let answer = 0;
  let top = (bottom = left = right = 0);

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      top = i > 0 ? arr[i - 1][j] : 0;
      bottom = i < arrLength - 1 ? arr[i + 1][j] : 0;
      left = j > 0 ? arr[i][j - 1] : 0;
      right = j < arrLength - 1 ? arr[i][j + 1] : 0;

      if (
        arr[i][j] > top &&
        arr[i][j] > bottom &&
        arr[i][j] > left &&
        arr[i][j] > right
      ) {
        answer++;
      }
    }
  }
  return answer;
}

console.log(solution(arr));

function solution1(arr) {
  let peakCount = 0;
  let arrLength = arr.length;
  const getNumber = (value) => value || 0;

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      const curr = arr[i][j];
      if (
        curr > getNumber(arr[i]?.[j - 1]) &&
        curr > getNumber(arr[i]?.[j + 1]) &&
        curr > getNumber(arr[i - 1]?.[j]) &&
        curr > getNumber(arr[i + 1]?.[j])
      ) {
        {
          peakCount++;
        }
      }
    }
  }

  return peakCount;
}

console.log(solution1(arr));

function solution2(arr) {
  let peakCount = 0;
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      const curr = arr[i][j];
      if (
        curr > (arr[i][j - 1] || 0) &&
        curr > (arr[i][j + 1] || 0) &&
        curr > (arr[i - 1]?.[j] || 0) &&
        curr > (arr[i + 1]?.[j] || 0)
      ) {
        peakCount++;
      }
    }
  }
  return peakCount;
}

console.log(solution2(arr));

// ========== without 0s ==========
function solution3(arr) {
  let peakCount = 0;
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      const curr = arr[i][j];
      if (
        curr > arr[i][j - 1] &&
        curr > arr[i][j + 1] &&
        curr > arr[i - 1]?.[j] &&
        curr > arr[i + 1]?.[j]
      ) {
        peakCount++;
      }
    }
  }
  return peakCount;
}

console.log(solution3(arr));
