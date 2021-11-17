/**
 * 动态规划
 * 时间O(n)
 * 空间O(1)
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max = nums[0];
    var dp = max;

    for (let i = 1; i < nums.length; i++) {
        dp = dp + nums[i] > nums[i] ? dp + nums[i] : nums[i];
        max = max < dp ? dp : max;
    }

    return max;
};