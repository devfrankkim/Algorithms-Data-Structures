/*
Coding Exercise - Finding Vowels
Write a function that returns the number of vowels used in a string.

Vowels are the characters a, e, i, o, and u

Examples

vowels('Hi There!'); --> 3
vowels('Why do you ask?'); --> 4
vowels('Why?'); --> 0
*/

function vowels(str) {
  const vow = ["a", "e", "i", "o", "u"];
  let answer = 0;

  for (let x of str) {
    if (vow.includes(x.toLowerCase())) {
      answer++;
    }
  }
  return answer;
}
