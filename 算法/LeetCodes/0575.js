/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    return Math.min(new Set(candyType).size, candyType.length / 2);
};

console.log(distributeCandies([1,2,3,4,5,6]))