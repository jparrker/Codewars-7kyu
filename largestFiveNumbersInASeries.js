// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

//iterate and check if chunks of five are bigger than current.
//if bigger, set as biggest, and check next chunk.

function getSubsequence(digits) {
  let result = 0;

  for (let i = 0; i < digits.length; i++) {
    let currentMax = digits.substr(i, 5);
    if (Number(currentMax) > result) {
      result = Number(currentMax);
    }
  }
  return result;
}

// brute force -> nested loop -> quadtratic -> bad

function solution(digits) {
  let result = 0;
  for (let index = 0; index < digits.length; index++) {
    let string = "";
    for (let index2 = index; index2 < index + 5; index2++) {
      string += digits[index2];
    }
    if (+string > result) {
      result = +string;
    }
  }
  return result;
}
