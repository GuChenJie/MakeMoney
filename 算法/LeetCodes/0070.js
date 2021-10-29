/**
 * @param {number} n
 * @return {number}
 */
 const climbStairs = function(n) {
    const counts = [];
    const climb = (n, counts) => {
        if(counts[n]) return counts[n];
        if(n === 0 || n === 1) {
            return counts[n] = 1;
        }
        return counts[n] = climb(n - 2, counts) + climb(n - 1, counts);
    };
    return climb(n, counts);
};
