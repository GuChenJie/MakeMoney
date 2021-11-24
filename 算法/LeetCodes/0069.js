/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    var n1 = x;
    var n2 = x;
    while (n1 > 0) {
        if (n1 * n1 === x || (n1 * n1 < x && (n1 + 1 ) * (n1 + 1 ) > x)) {
            break;
        }
        if (n1 * n1 > x) {
            n2 = n1;
            n1 = parseInt(n1 / 2);
        } else {
            n1 = parseInt((n1 + n2) / 2);
        }
    }
    return n1;
};