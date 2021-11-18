/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    var dp = matrix[0];
    var left;
    var right;
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            right = dp[j];
            if (j === 0) {
                dp[j] = Math.min(dp[j], dp[j+1]) + matrix[i][j];
            } else if (j === matrix.length - 1) {
                dp[j] = Math.min(left, dp[j]) + matrix[i][j];
            } else {
                dp[j] = Math.min(left, dp[j], dp[j+1]) + matrix[i][j];
            }
            left = right;
        }
    }
    return Math.min(...dp);
};