// LeetCode    0020 - Valid Parentheses
// Topic:      Stack, String
// Difficulty: Easy

function isValid(s: string): boolean {
    let stack: string[] = [];
    if (s === "") return false;
    const map: { [key: string]: string } = {
        ")": "(",
        "}": "{",
        "]": "[",
    }

    for (let char of s) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else {
            if (stack.pop() !== map[char]) return false;
        }
    }
    return stack.length === 0;
};