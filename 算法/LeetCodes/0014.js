/**
 * @param {string[]} strs
 * @return {string}
 */
 const longestCommonPrefix = function longestCommonPrefix(strs) {
    if (strs.length === 1) {
        return strs[0];
    }

    let prefix = '';
    for (let i = 0; i < strs[0].length; i++) {
        const c = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if(c !== strs[j][i]) {
                return prefix;
            }
        }
        prefix += c;
    }
    return prefix;
};