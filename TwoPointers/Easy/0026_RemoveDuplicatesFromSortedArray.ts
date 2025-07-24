// LeetCode    0026 - Remove Duplicates from Sorted Array
// Topic:      Two Pointers, Array
// Difficulty: Easy

function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    
    let i = 0;
    
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
