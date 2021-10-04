/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function strStr(haystack, needle) {
    if(!needle) return 0;


    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack[i] === needle[0]) {
            let isDiff = false;
            for (let j = 1; j < needle.length; j++) {
                if(haystack[i+j] !== needle[j]) {
                    isDiff = true;
                    break;
                }
            }
            if (!isDiff) {
                return i;
            }
        }
    }

    return -1;
};