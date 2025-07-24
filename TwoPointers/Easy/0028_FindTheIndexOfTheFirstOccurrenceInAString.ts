// LeetCode    0028 - Find the Index of the First Occurrence in a String
// Topic:      Two Pointers, String, String Matching
// Difficulty: Easy

function strStr(haystack: string, needle: string): number {
    if (needle.length === 0) return 0;

    for (let j = 0; j <= haystack.length - needle.length; j++) {
        let i = 0;
        while (i < needle.length && (haystack[j + i] === needle[i])) {
            i++;
        }
        if (i === needle.length) return j;
    }
    return -1;
};
