/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function lengthOfLastWord(s) {
    let endIndex = null;
    for (let i = s.length - 1; i >= 0; i--) {
        if(endIndex === null && s[i] !== ' ') {
            endIndex = i;
        } else if(endIndex && s[i] === ' ') {
            return endIndex - i;
        }
    }
    return endIndex === null ? 0 : endIndex + 1;
};