/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    var k = 1;
    if(x < 0) {
        k = -1;
        x = -x;
    }
    var num = 0;
    do {
        num = num * 10 + x % 10;
        x = parseInt(x/10);
    } while (x >= 1);
    
    num = k * num;
    
    if( num > 2147483647 || num < -2147483648){
        return 0
    }
    
    return num;
};