// LeetCode    0014 - Longest Common Prefix
// Topic:      Array
// Difficulty: Easy

function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 0; i < strs.length; i++) {
        while(!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
};