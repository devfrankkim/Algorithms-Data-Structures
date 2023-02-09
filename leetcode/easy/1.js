// 1. Two Sum
/*
    Example 1:

    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
    Example 2:

    Input: nums = [3,2,4], target = 6
    Output: [1,2]
    Example 3:

    Input: nums = [3,3], target = 6
    Output: [0,1]
*/

var twoSum = function (nums, target) {
  let count = 0;
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      count = nums[i] + nums[j];
      if (count === target) {
        ans.push(i, j);
        return ans;
      }
    }
  }
};

var twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// NOTE : 해시맵 O(n) - 학습
let twoSum2 = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] === undefined) {
      hash[nums[i]] = i;
    } else {
      return [hash[target - nums[i]], i];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 11, 15, 7], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
