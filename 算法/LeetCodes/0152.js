/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    var dp = 1;
    var divisor = 0;
    var max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        dp = (dp === 0 && nums[i] !== 0) ? nums[i] : dp * nums[i];
        if (dp < 0) {
            if (divisor === 0) {
                divisor = dp;
                max = Math.max(max, dp);
            } else {
                max = Math.max(max, dp / divisor);
            }
        } else if (dp == 0) {
            divisor = 0;
            max = Math.max(max, dp);
        } else {
            max = Math.max(max, dp);
        }
        
    }
    return max;
};