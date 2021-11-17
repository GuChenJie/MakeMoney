
/**
 * dp。难点在于边界情况
 * 时间O(n)、空间O(1)
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
    var a = 1;
    var b;
    if (s[0] == 0) {
        return 0;
    } else {
        b = 1;
    }
    for (let i = 1; i < s.length; i++) {
        if (s[i] == 0 && (s[i-1] == 0 || s[i-1] > 2)) {
            return 0;
        } else if (s[i] == 0) {
            b = a;
        } else if(s[i-1] == 0 || s[i-1] + s[i] > 26) {
            a = b;
        }
         else {
            b = a + b;
            a = b - a;
        }
        
    }
    return b;
};