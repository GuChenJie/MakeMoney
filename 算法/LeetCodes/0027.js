/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function removeElement(nums, val) {
    let index = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] === val) {
            let n = nums[i];
            nums[i] = nums[index];
            nums[index] = n;
            index--;
        }
    }
    return index + 1;
};