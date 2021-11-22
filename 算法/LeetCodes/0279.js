/**
 * 此题是用dp算法，最佳解可用数学定理
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
    var dp = [];

    var getMinSquares = function(n) {
        if(n === 0) return 0;
        if(dp[n] !== undefined) return dp[n];

        var min = Infinity;

        for (let i = 1; i * i <= n; i++) {
            min = Math.min(min, getMinSquares(n - i * i));
        }
        dp[n] = min + 1;
        return dp[n];
    }
    getMinSquares(n);

    return dp[n];
};