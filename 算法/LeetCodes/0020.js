/**
 * @param {string} s
 * @return {boolean}
 */
 const map = {
    ')': '(',
    ']': '[',
    '}': '{',
}
const isValid = function isValid(s) {
    let leftStrs = [];
    let c;
    for (let i = 0; i < s.length; i++) {
        c = s[i];
        if ((c === '(' || c === '[' || c === '{')) {
            leftStrs.push(c);
        } 
        
        if (c === ')' || c === ']' || c === '}') {
            if (leftStrs.length > 0 && map[c] === leftStrs[leftStrs.length - 1]) {
                leftStrs.pop();
            } else {
                return false;
            }
        }
    }

    return leftStrs.length === 0;
};
