/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalSquare = function(matrix) {
    var m = matrix.length;
    var n = matrix[0].length;
    var dp = [];
    var max = 0;
    for (let j = 0; j < n; j++) {
        matrix[0][j] === 0 ? (dp[0] = [0, 0]) : (dp[0] = [1, 1]);
        for (let i = 1; i < m; i++) {
            if (matrix[i][j] == 0) {
                dp[i] = [0, 0];
            } else {
                dp[i][0] = Math.min(dp[i][0], dp[i-1][0]) + 1;
                dp[i][1] = dp[i-1][1] + 1;
                max = Math.max(max, Math.min(dp[i][0], dp[i][1]));
            }
            console.log(dp)
        }
    }
    return max * max;
};