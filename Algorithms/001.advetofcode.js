// https://adventofcode.com/2015/day/1

let char = "(()))))";
let arr = char.split("");

function countMinusOne() {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (count === -1) {
      return i;
    }
    if (arr[i] === "(") {
      count++;
    } else if (arr[i] === ")") {
      count--;
    }
  }
}

function checkChar() {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      count++;
    } else if (arr[i] === ")") {
      count--;
    }
  }
  return count;
}

function snow(arr) {
  let countNumber = checkChar();
  let firstMinus = countMinusOne();
  console.log("countNumber: ", countNumber, "firstMinus: ", firstMinus);
}

snow(arr);
