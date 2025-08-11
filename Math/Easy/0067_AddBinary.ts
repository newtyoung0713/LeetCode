// LeetCode    0067 - Add Binary
// Topic:      Math, String, Bit Manipulation, Simulation
// Difficulty: Easy

function addBinary(a: string, b: string): string {
    let result: string[] = [];
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;

    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = carry;
        if (i >= 0) {
            sum += parseInt(a[i], 10);
            i--;
        }
        if (j >= 0) {
            sum += parseInt(b[j], 10);
            j--;
        }
        result.push((sum % 2).toString());
        carry = Math.floor(sum / 2);
    }
    return result.reverse().join("");
};
