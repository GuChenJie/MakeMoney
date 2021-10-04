/**
 * @param {string} s
 * @return {string}
 */
 const longestPalindrome = function longestPalindrome(s) {
    for (let len = s.length; len > 0; len--) {
        for (let i = 0; i + len - 1 < s.length; i++) {
            let isPalindrome = true;
            for (let j = 0; j < len / 2; j++) {
                if(s[j + i] !== s[len+i-j-1]) {
                    isPalindrome = false;
                    break;
                }
            }
            if(isPalindrome) {
                return s.slice(i, i+len);
            }
        }
    }
    return '';
};