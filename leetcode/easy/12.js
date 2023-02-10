// 14. Longest Common Prefix

// new Set() 도전하기 later.
// const newSet = new Set([s]);
// const I=1,V=5,X=10,L=50,C=100,D=500,M=1000;
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const str = [...s];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "V") str[i] = 5;
    if (str[i] === "L") str[i] = 50;
    if (str[i] === "D") str[i] = 500;
    if (str[i] === "M") str[i] = 1000;

    if (str[i] === "I") {
      if (str[i + 1] === "V" || str[i + 1] === "X") {
        str[i] = -1;
      } else {
        str[i] = 1;
      }
    }

    if (str[i] === "X") {
      if (str[i + 1] === "L" || str[i + 1] === "C") {
        str[i] = -10;
      } else {
        str[i] = 10;
      }
    }

    if (str[i] === "C") {
      if (str[i + 1] === "D" || str[i + 1] === "M") {
        str[i] = -100;
      } else {
        str[i] = 100;
      }
    }
    count += str[i];
  }
  return count;
};

// exception과 비교해줌. slice해서 2개씩 짤라서 다음이 있는지 확임함. 있으면, 디폴트에서 -,  아니면 디폴트에서 +
var romanToInt2 = function (str) {
  let total = 0;
  let rom = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let exeptions = new Set(["IV", "IX", "XL", "XC", "CD", "CM"]);

  for (let i = 0; i < str.length; i++) {
    if (exeptions.has(str.slice(i, i + 2))) {
      total -= rom[str[i]];
    } else {
      total += rom[str[i]];
    }
  }

  return total;
};

// 두칸씩 뛰어넘음
var romanToInt3 = function (str) {
  let romNumber = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let s = str.split("");
  let accumulator = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I" && s[i + 1] === "V") {
      accumulator += 4;
      i++;
    } else if (s[i] === "I" && s[i + 1] === "X") {
      accumulator += 9;
      i++;
    } else if (s[i] === "X" && s[i + 1] === "L") {
      accumulator += 40;
      i++;
    } else if (s[i] === "X" && s[i + 1] === "C") {
      accumulator += 90;
      i++;
    } else if (s[i] === "C" && s[i + 1] === "D") {
      accumulator += 400;
      i++;
    } else if (s[i] === "C" && s[i + 1] === "M") {
      accumulator += 900;
      i++;
    } else {
      accumulator += romNumber[s[i]];
    }
  }
  return accumulator;
};
