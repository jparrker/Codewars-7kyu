// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

const countBits = function (n) {
  const bin = n.toString(2);
  //regex for 1s
  const count = bin.match(/1/g);

  return count ? count.length : 0;
};
