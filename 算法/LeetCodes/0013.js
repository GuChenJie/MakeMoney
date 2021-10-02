const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}

/**
 * O(n)
 * @param {string} s
 * @return {number}
 */
var romanToInt = function romanToInt(s) {
    let prev;
    let curr;
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        curr = s[i];
        num += romanMap[curr];
        if(prev && romanMap[prev] < romanMap[curr]) {
            num -= 2 * romanMap[prev];
        }
        prev = curr;
        
    }
    return num;
};