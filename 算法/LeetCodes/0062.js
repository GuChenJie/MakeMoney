/**
 * @param {number[][]} grid
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    var dp = [[1]];
    for (let i = 1; i < m; i++) {
        dp.push([1]);
    }
    for (let i = 1; i < n; i++) {
        dp[0].push(1);
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i].push(dp[i-1][j] + dp[i][j-1]);
        }
    }
    return dp[m-1][n-1];
};
