/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var dp = [1];
    var left;
    var right;
    for (let i = 1; i <=rowIndex; i++) {
        for (let j = 1; j <= i; j++) {
            if (j === i) {
                dp.push(1);
                left = 1;
            } else {
                right = dp[j];
                dp[j] = left + right;
                left = right;
            }           
        }
    }
    return dp;
};