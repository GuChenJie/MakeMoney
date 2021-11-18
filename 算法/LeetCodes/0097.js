/**
 * 时间复杂度O(m*n)
 * 空间复杂度O(min(m, n)), 我这里没实现min
 *  dp[i][j] = dp[i-1][j] && s3[index] === s1[i] 
 *          || dp[i][j-1] && s3[index] === s2[j]
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
 var isInterleave = function(s1, s2, s3) {
    if(s1.length + s2.length !== s3.length) return false;
    var dp = [true];
    for (let j = 1; j <= s2.length; j++) {
        dp[j] = dp[j-1] && s3[j-1] === s2[j-1];
        
    }
    for (let i = 1; i <= s1.length; i++) {
        dp[0] = dp[0] && s1[i-1] === s3[i-1];
        for (let j = 1; j <= s2.length; j++) {
            dp[j] = dp[j] && s3[i+j-1] === s1[i-1] 
                 || dp[j-1] && s3[i+j-1] === s2[j-1];
        }
    }
    return dp[s2.length];
};