/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let view = [];
    let start = -1;
    let maxView = [];
    s.split('').forEach((c, i) => {
        start = view.lastIndexOf(c);
        if(~start) {
            view.splice(0, start + 1);
        } 
        view.push(c);
        if(maxView.length < view.length) {
            maxView = view;
        }
    })
    return maxView.length;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring('cdd'));
console.log(lengthOfLongestSubstring('abcb'));