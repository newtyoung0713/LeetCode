// LeetCode    0027 - Remove Element
// Topic:      Array, Two Pointers
// Difficulty: Easy

function removeElement(nums: number[], val: number): number {
    let cnt = 0;
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (val !== nums[i]) {
            nums[j] = nums[i];
            cnt++;
            j++;
        }
    }
    return cnt;
};
