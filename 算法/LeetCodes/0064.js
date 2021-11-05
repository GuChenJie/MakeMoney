/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m = grid[0].length;
    var n = grid.length;
    var dp = [[grid[0][0]]];
    for (let i = 1; i < m; i++) {
        dp[0].push(dp[0][i - 1] + grid[0][i]);
    }
    for (let i = 1; i < n; i++) {
        dp.push([dp[i - 1][0] + grid[i][0]]);
        
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dp[i].push(Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]);
        }
    }
    return dp[n-1][m-1];
};
