// LeetCode    0066 - Plus One
// Topic:      Array, Math
// Difficulty: Easy

function plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }

    digits.unshift(1);
    return digits;
};
