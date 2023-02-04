// https://leetcode.com/problems/longest-common-prefix/
// Longest Common Prefix

/**
 * @param {string[]} strs
 * @return {string}
 */

// ================ Runtime: 71 ms ================
var longestCommonPrefix = function (strs) {
  let prefix = "";

  // base condition
  if (strs === null || strs.length === 0) {
    return prefix;
  }

  // loop the base string
  for (let i = 0; i < strs[0].length; i++) {
    // base string
    let memo = strs[0][i];

    // loop base string vs next string
    for (let j = 1; j < strs.length; j++) {
      if (memo !== strs[j][i]) {
        return prefix;
      }
    }
    prefix += memo;
  }
  return prefix;
};

// ================ Runtime: 91 ms ================

var longestCommonPrefix = function (strs) {
  let prefix = "";
  let stop = false;

  for (let i = 0; i < strs[0].length && !stop; i++) {
    let memo = strs[0][i];

    for (let j = 1; j < strs.length && !stop; j++) {
      if (strs[j][i] !== memo) {
        stop = true;
      }
    }

    if (!stop) prefix += memo;
  }

  return prefix;
};

// ================  73 ms ================
var longestCommonPrefix = function (strs) {
  // Return early on empty input
  if (!strs.length) return "";

  // Loop through the letters of the first word
  for (let i = 0; i <= strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (!(strs[j][i] === strs[0][i])) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
};
