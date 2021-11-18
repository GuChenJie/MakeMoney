/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    var s = duration;
    for (let i = 1; i < timeSeries.length; i++) {
        s += timeSeries[i] - timeSeries[i-1] < duration ? timeSeries[i] - timeSeries[i-1] : duration;
    }
    return s;
};