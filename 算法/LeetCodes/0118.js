/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var dp = [];
    for (let n = 0; n < numRows; n++) {
        dp.push([]);
        for (let i = 0; i < n + 1; i++) {
            if (i === 0 || i === n) {
                dp[n].push(1);
            } else {
                dp[n].push(dp[n-1][i] + dp[n-1][i-1]);
            }
        }
    }
    return dp;
};