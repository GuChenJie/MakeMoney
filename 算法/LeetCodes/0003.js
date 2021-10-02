/**
 * @param {string} s
 * @return {number}
 */
 const lengthOfLongestSubstring = function lengthOfLongestSubstring(s) {
    let view = '';
    let start = -1;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
      start = view.lastIndexOf(s[i]);
      view += s[i];
      if (~start) {
        view = view.slice(start + 1);
      }
      if (max < view.length) {
        max = view.length;
      }
    }
    return max;
  };
  
