/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function plusOne(digits) {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += carry;
        if (carry === 1 && digits[i] === 10) {
            digits[i] = 0;
            carry = 1;
        } else {
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};