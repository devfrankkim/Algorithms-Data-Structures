// replaceAll word = word.replaceAll(strs[i], " ");
/*
["aya", "yee", "u", "maa", "wyeoo"]	1
["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]	3
*/
function solution(babbling) {
  let strs = ["aya", "ye", "woo", "ma"];
  let word = "";
  let answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    word = babbling[i].toString();
    for (let j = 0; j < strs.length; j++) {
      word = word.replaceAll(strs[j], " ");
    }

    if (word.trim().length == 0) {
      answer++;
    }
  }
  return answer;
}

function solution1(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) answer++;
  });

  return answer;
}

function solution2(babbling) {
  const wordSet = new Set(["aya", "ye", "woo", "ma"]);
  let result = 0;

  for (const word of babbling) {
    let remainWord = "";
    let prevWord = "";
    for (const char of word) {
      remainWord += char;
      if (wordSet.has(remainWord)) {
        if (remainWord === prevWord) break;
        prevWord = remainWord;
        remainWord = "";
      }
    }
    if (remainWord === "") result++;
  }
  return result;
}
