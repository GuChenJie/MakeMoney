/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = function twoSum(nums, target) {
    const len = nums.length;
    for (let space = 1; space < len; space += 1) {
      for (let i = 0; i + space < len; i += 1) {
        if (target === nums[i] + nums[i + space]) {
          return [i, i + space];
        }
      }
    }
    return []
  };