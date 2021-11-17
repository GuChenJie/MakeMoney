/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    var n1 = 0;
    var n2 = 0;
    var dp;
    for (let i = 0; i < nums.length; i++) {
        dp = Math.max(n1 + nums[i], n2);
        n1 = n2;
        n2 = dp;
    }
    return dp;
};