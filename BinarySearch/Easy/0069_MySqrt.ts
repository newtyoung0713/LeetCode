// LeetCode    0069 - mySqrt
// Topic:      Binary Search, Math
// Difficulty: Easy

function mySqrt(x: number): number {
    if (x < 2) return x;
    let low = 1;
    let high = x;
    let ans = 0;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;

    // Method - 2
    // let cnt = 0;
    // while (cnt * cnt <= x) {
    //     cnt++;
    // }
    // return cnt - 1;
};
