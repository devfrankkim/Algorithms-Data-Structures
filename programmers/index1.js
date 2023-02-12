function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(temp)];

  return answer.sort((a, b) => a - b);
}
// Set객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있다.
// new Set([1,3,1,1,1,1,3,3,3]) --> Set(2) {1, 3}
// [...new Set([1,3,1,1,1,1,3,3,3])] --> (2) [1, 3]

/*
중복제거 ----> indexOf()함수는 배열에서, 특정값이 처음으로 나타나는 index를 리턴.

answer = answer.filter((e,i) => {
    return answer.indexOf(e) === i;
});
*/
