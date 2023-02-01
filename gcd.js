// Try without recursion first and then get fancy. This problem really needs to be written out. Grab some paper!

// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// see if what number divides evenly into both numbers. Start high and go low! recursive = return y == 0 ? x : mygcd(y, x % y)

// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)
// Problem will always have a GCD.
function mygcd(x, y) {
  //non recursive
  for (let i = Math.min(x, y); i > 0; i--) {
    if (x % i === 0 && y % i === 0) {
      return i;
    }
  }
}

// hi = lower * q + r
// 30 = 12 * q + r
// 12 * 2 + 6
//12 = 6 * 2 = 2 = 0
// Look at previous r. That is gcd

console.log(mygcd(30, 12), 6);
console.log(mygcd(8, 9), 1);
console.log(mygcd(1, 1), 1);
