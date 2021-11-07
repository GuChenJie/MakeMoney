/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    if(obstacleGrid[m-1][n-1] === 1 || obstacleGrid[0][0] === 1) return 0

    var dp = [[1]];

    for (let i = 1; i < m; i++) {
        dp[i-1][0] === 1 && obstacleGrid[i][0] === 0 ? dp.push([1]) : dp.push([0]);        
    }
    for (let i = 1; i < n; i++) {
        dp[0][i-1] === 1 && obstacleGrid[0][i] === 0 ? dp[0].push(1) : dp[0].push(0);        
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i].push(obstacleGrid[i][j] === 0 ? dp[i-1][j] + dp[i][j-1] : 0);
        }
    }

    return dp[m-1][n-1];
};