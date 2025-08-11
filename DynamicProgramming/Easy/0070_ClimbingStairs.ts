// LeetCode    0070 - Climbing Stairs
// Topic:      Dynamic Programming, Math, Memorization
// Difficulty: Easy

function climbStairs(n: number): number {
  if (n <= 2) return n;
  let a = 1, b = 2;
  for (let i = 3; i <= n; i++) {
      const temp = a + b;
      a = b;
      b = temp;
  }
  return b;
};
