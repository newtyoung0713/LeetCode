// LeetCode    0035 - Search Insert Position
// Topic:      Binary Search, Array
// Difficulty: Easy

function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};