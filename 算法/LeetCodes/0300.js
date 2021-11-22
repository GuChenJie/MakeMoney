/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    var dp = 1;
    var max = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i-1]) {
            dp++;
            max = Math.max(dp, max);
        } else {
            dp = 1;
        }
    }
    return max;
};