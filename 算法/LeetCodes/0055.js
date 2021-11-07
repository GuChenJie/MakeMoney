/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var step = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] === 0 || nums[i] < step) {
            step++;
        } else {
            step = 1;
        }
    }
    return step === 1;
};