/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var dp = [0];
    var left, right;
    for (let i = 0; i < triangle.length; i++) {
        for (let j = 0; j <= i; j++) {
            right = dp[j];
            if (j === 0) {
                dp[j] = triangle[i][j] + right;
            } else if (j === i) {
                dp[j] = triangle[i][j] + left;
            } else {
                dp[j] = Math.min(left, right) + triangle[i][j];
            }
            left = right;
        }
    }
    return Math.min(...dp);
};