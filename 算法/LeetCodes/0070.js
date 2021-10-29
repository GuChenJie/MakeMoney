/**
 * @param {number} n
 * @return {number}
 */
 const climbStairs = function(n) {
    let numWays;
    let a = 1;
    let b = 1;
    for(let i = 0; i < n; i++) {
        numWays = a + b;
        a = b;
        b = numWays;
    }

    return a;
};
