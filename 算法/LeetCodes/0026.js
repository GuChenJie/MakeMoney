/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let count = 0;
    let hasN = false;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < count; j++) {
            if (nums[j] === nums[i]) {
                hasN = true;
                break;
            }
        }
        if (!hasN) {
            let t = nums[i];
            nums[i] = nums[count];
            nums[count] = t;
            count++;
        }
        hasN = false;
    }
    return count;
};