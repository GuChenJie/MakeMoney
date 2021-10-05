/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const searchInsert = function searchInsert(nums, target) {
    const len = nums.length;
    let i = 0;
    let j = len;
    let p;
    do {
        p = parseInt((i + j) / 2);
        if(nums[p] === target || (target > nums[p - 1] && target < nums[p])) {
            break;
        } else if(target < nums[p]) {
            j = p;
        } else if(target > nums[p]) {
            i = p;
        }
    } while (j !== i && i !== len - 1 );

    if (nums[p] < target) {
        return p + 1;
    }
    return p;
};