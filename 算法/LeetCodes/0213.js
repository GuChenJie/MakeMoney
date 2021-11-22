/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if(nums.length === 1) return nums[0];
    var ln1 = 0, ln2 = nums[0];
    var rn1 = 0, rn2 = 0;
    var dp = [nums[0], 0];
    for (let i = 1; i < nums.length; i++) {
        dp[0] = Math.max(ln1 + nums[i], ln2);
        ln1 = ln2;
        ln2 = dp[0];

        dp[1] = Math.max(rn1 + nums[i], rn2);
        rn1 = rn2;
        rn2 = dp[1];
    }
    return Math.max(ln1, dp[1]);
};