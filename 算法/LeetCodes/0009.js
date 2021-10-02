/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function isPalindrome(x) { 
    if(x < 0 || x >= Math.pow(2, 31)) { 
        return false
    }
    let base = x;
    let num = 0;

    do {
        num = num * 10 + (x % 10);
        x = parseInt(x / 10);
    } while ( x > 0 );
    
    return base === num;
};
